# GLM-5.3-FlashX-Legal — Claude Sonnet 4.6 Research

GLM-5.3-FlashX-Legal (Z.ai, released 2026-10-12) is a legal-domain specialist built on the GLM-5.3-FlashX multimodal serving tier (320B total / 18B active parameters; hybrid sparse+linear attention with IndexPool, mHC, 45 layers). It adds legal-domain mid-training and RL post-training across tens of thousands of legal task environments. Use cases: document understanding, legal reasoning, contract review and drafting. Access: Z.ai API (`glm-5.3-flashx-legal`), OpenRouter (`z-ai/glm-5.3-flashx-legal`), AutoClaw Legal Assistant (Word/WPS plugins). Context: 1,048,576 in / 131,072 out. Modalities: text, image, video, file in; text out. Thinking mode on (cannot be disabled; `reasoning_effort` max recommended). Pricing: $0.37/$1.25 per 1M in/out ($0.075 cached).

Benchmarks (verified):
- Harvey LAB (legal agents, all-criteria pass rate): 19.2% — SOTA among open-source models on this eval; +12.5 pp over GLM-5.3-Flash base (~6.7%)
- LegalBench: matches closed-source frontier models on legal reasoning (Z.ai reported)
- PLawBench: parity on localised legal practice standards (Z.ai reported)
- Harvey LAB context: strict "all-pass" rubric — every step (issue identification, rule citation, legal analysis, deliverable formatting) must be completely correct
- General GPQA/MMLU-Pro: no isolated score published for the Legal SKU (base model AA Index 57)

## Scores

- **Tool use: 65/100.** Harvey LAB 19.2% all-criteria pass is real legal-agent evidence (+12.5 pp over base), and legal MCP tool integrations via AutoClaw/AutoClaw Legal (Word/WPS plugins) are documented. The absolute pass rate is low by general agent standards; the strict Harvey LAB rubric makes 19.2% meaningful. Capped by single agentic benchmark row.
- **Reasoning: 62/100.** LegalBench and PLawBench parity with frontier models demonstrates strong domain-specific legal reasoning. No GPQA or MMLU-Pro published for this SKU; base model AA Index ~57 provides a general reasoning floor. Score reflects strong domain reasoning with limited general-benchmark evidence.
- **Context window: 95/100.** 1,048,576 in / 131,072 out. Tier: 1M = 92 points; bumped to 95 for the genuine 1M-context legal document use case (processing full case files, contracts, regulatory corpora) which is well-matched to the architecture. No retrieval-quality score (MRCR/RULER) published.
- **Multimodal: 82/100.** Native text/image/video/file in inherited from GLM-5.3-FlashX's multimodal stack. File input (PDF, DOCX) is specifically relevant for legal workflows. No per-task vision benchmark for the Legal SKU; using base model capability tier.
- **Coding: 42/100.** No coding benchmark for the Legal SKU. Positioned for legal document work, not code generation. Score reflects the structural absence of coding capability as a design choice.
- **Cost efficiency: 88/100.** $0.37/$1.25 per 1M for a 1M-context legal specialist with mandatory thinking mode is competitive — well below commercial legal AI platforms (which typically charge per-document). The $0.075 cached input enables cost-effective repeated context use across large case files.
- **Overall Score: 69/100.** Mean of Tool use (65) + Reasoning (62) + Context (95) + Multimodal (82) + Coding (42) = 346 / 5 = 69.2, rounded to 69. Best positioned for legal research, contract review, and drafting workflows — particularly where 1M context, mandatory thinking, legal MCP integrations, and Harvey LAB-validated performance on multi-step legal tasks matter. Not a general-purpose model.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
