ItemEvents.modifyCreativeTab(event => {
  event.removeAll(item => item.id.namespace === 'superbwarfare')
})
