.PHONY: init
init:
	pip install pre-commit
	pre-commit run -a

build:
	@make skillx_ui build
	@make skillx_core build