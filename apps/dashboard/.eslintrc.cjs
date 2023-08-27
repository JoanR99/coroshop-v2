module.exports = {
	root: true,
	extends: ['custom', 'plugin:react-hooks/recommended'],
	plugins: ['react-refresh'],
	env: { browser: true, es2020: true },
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};
