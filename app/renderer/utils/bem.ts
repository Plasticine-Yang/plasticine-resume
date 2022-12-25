const DEFAULT_NAME_SPACE = 'pl'
const STATE_PREFIX = 'is-'

/**
 * @description 根据 block 生成对应命名空间
 * @param block BEM block
 */
const createNameSpace = (
  block: string,
  cssModuleClasses?: CSSModuleClasses,
) => {
  const namespace = DEFAULT_NAME_SPACE

  /**
   * @description 生成符合 BEM 规范的 CSS 类名
   */
  const bem = (blockSuffix: string, element: string, modifier: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace, block, blockSuffix, element, modifier)
      : ''

  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '')

  const e = (element: string) =>
    element ? _bem(namespace, block, '', element, '') : ''

  const m = (modifier: string) =>
    modifier ? _bem(namespace, block, '', '', modifier) : ''

  const be = (blockSuffix: string, element: string) =>
    blockSuffix && element
      ? _bem(namespace, block, blockSuffix, element, '')
      : ''

  const bm = (blockSuffix: string, modifier: string) =>
    blockSuffix && modifier
      ? _bem(namespace, block, blockSuffix, '', modifier)
      : ''

  const em = (element: string, modifier: string) =>
    element && modifier ? _bem(namespace, block, '', element, modifier) : ''

  /**
   * @description 根据需要生成状态名
   * @param stateName 状态名
   * @param active 状态是否激活 -- 不传入时默认激活状态
   */
  const is = (stateName: string, active?: boolean) => {
    const shouldGenerate = active !== undefined ? active : true
    const cls = stateName && shouldGenerate ? `${STATE_PREFIX}${stateName}` : ''
    return cssModuleClasses ? cssModuleClasses[cls] : cls
  }

  /**
   * @description 负责生成完整的 BEM classname
   * @param namespace 命名空间
   * @param block BEM block
   * @param blockSuffix BEM block suffix
   * @param element BEM element
   * @param modifier BEM modifier
   * @returns BEM classname
   */
  const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string,
  ) => {
    let cls = `${namespace}-${block}`

    blockSuffix && (cls += `-${blockSuffix}`)
    element && (cls += `__${element}`)
    modifier && (cls += `--${modifier}`)

    return cssModuleClasses ? cssModuleClasses[cls] : cls
  }

  return {
    bem,
    b,
    e,
    m,
    be,
    bm,
    em,
    is,
  }
}

export { createNameSpace }
