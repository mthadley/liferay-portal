AUI.add(
	'liferay-input-range-fallback',
	function(A) {

		var NAME = 'input-range-fallback';

		InputRangeFallback = A.Component.create(
			{
				ATTRS: {
					axis: {
						value: 'x'
					},

					fallBack: {
						valueFn: function () {
							var testInput = A.Node.create('<input />');
							testInput.set('type', 'range');

							return testInput.get('type') !== "range";
						}
					},

					max: {
						value: 100
					},

					min: {
						value: 0
					},

					outputNode: {
					},

					srcNode: {
					},

					value: {
						value: 50
					}
				},

				NAME: NAME,

				prototype: {
					bindUI: function () {
						var instance = this;

						var output = instance.get('outputNode');
						var outputNode = A.one(output);

						var inputNode = instance.fallBackSlider;

						if (outputNode && inputNode) {
							inputNode.after(
								'valueChange',
								function(event) {
									outputNode.val(inputNode.getValue());
								}
							);
						}
					},

					renderUI: function () {
						var instance = this;

						var axis = instance.get('axis');
						var fallBack = instance.get('fallBack');
						var max = instance.get('max');
						var min = instance.get('min');
						var srcNode = instance.get('srcNode');
						var value = instance.get('value');

						var inputNode = A.one(srcNode);

						if (fallBack && inputNode) {
							inputNode.hide();

							var length = inputNode.ancestor().width();

							var fallBackSlider = new A.Slider(
								{
									axis: axis,
									length: length,
									max: max,
									min: min,
									render: inputNode.ancestor(),
									value: value
								}
							);

							instance.fallBackSlider = fallBackSlider;
						}
					}
				}
			}
		);

		Liferay.InputRangeFallback = InputRangeFallback;
	},
	'',
	{
		requires: ['aui-base', 'aui-node', 'slider']
	}
);