# Kimi K2.7 Code — findings by Muse Glimmer 30B

- Source: Moonshot AI / kimi-k2.7-code
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Open-source coding-focused agentic model built for long-horizon software engineering. K2.6 iteration with ~30% less thinking-token usage, thinking + preserve_thinking always enabled, native multimodal input.
- **Provider / access:** Moonshot AI / Kimi. Kimi Code https://www.kimi.ai/code, Kimi API https://platform.kimi.ai/, Hugging Face `moonshotai/Kimi-K2.7-Code`. Third-party: Together AI, OpenRouter.
- **Release / knowledge:** Released June 12 2026; knowledge cutoff 2025-01 per JinDaGe.
- **IDs:** `kimi-k2.7-code`; high-speed `kimi-k2.7-code-highspeed`; Hugging Face `moonshotai/Kimi-K2.7-Code`
- **Context window:** 256K / 262,144 tokens
- **Modalities:** Input text, image, video via MoonViT encoder; output text
- **Pricing as of 2026-10-24:** Input cache miss $0.95 / 1M, input cache hit $0.19 / 1M, output $4.00 / 1M. Kimi Code subscriptions $15-$159/mo.
- **Architecture:** Mixture-of-Experts; total 1T parameters, activated 32B per token; 384 experts, 8 selected + 1 shared; 61 layers; MLA attention; SwiGLU activation; MoonViT 400M vision encoder; native INT4.

### Raw benchmarks found

**Official Moonshot / Hugging Face vendor-reported**
Testing with thinking enabled, temperature 1.0, top-p 0.95, 262,144-token context.

Coding
- Kimi Code Bench v2: K2.6 50.9 → K2.7 Code 62.0; GPT-5.5 69.0; Claude Opus 4.8 67.4
- Program Bench: 48.3 → 53.6; GPT-5.5 69.1; Opus 4.8 63.8
- MLS Bench Lite: 26.7 → 35.1; GPT-5.5 35.5; Opus 4.8 42.8

Agentic
- Kimi Claw 24/7 Bench: 42.9 → 46.9; GPT-5.5 52.8; Opus 4.8 50.4
- MCP Atlas: 69.4 → 76.0; GPT-5.5 79.4; Opus 4.8 81.3
- MCP Mark Verified: 72.8 → 81.1; GPT-5.5 92.9; Opus 4.8 76.4
Source: https://www.kimi.ai/resources/kimi-k2-7-code ; https://huggingface.co/moonshotai/Kimi-K2.7-Code

**Third-party Together AI evaluation**
- FrontierMath Tier 4 12.2%
- GPQA Diamond 89.6%
- HLE 33%
- SciCode 47%
- GDPval-AA 34%
- Terminal-Bench 2.1 67%
- Agent Arena +4.3pp
- FrontierCode 30.1%
- DeepSWE 31%
Source: https://www.together.ai/models/kimi-k27-code

**Conflicts / notes**
- Official Moonshot materials publish only internal Kimi Code Bench, Program Bench, MLS Bench Lite, Kimi Claw 24/7, MCP Atlas and MCP Mark Verified. No official Terminal-Bench, GDPval-AA, Humanity’s Last Exam, SWE-bench or LiveCodeBench numbers released by Moonshot.
- Together AI suite scores are from Together’s evaluation, not reproduced on official site.
- Codersera notes as of 12 Jun 2026 no independent third-party numbers for K2.7 on standard public suites.
Source: https://codersera.com/blog/kimi-k2-7-complete-guide-2026/

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 76.0 vendor, MCP Mark Verified 81.1 vendor; Terminal-Bench 2.1 67% Together AI only. Limited official agentic suite.
- **Reasoning: 58/100.** GPQA Diamond 89.6% Together AI, HLE 33% Together AI. No official HLE/GPQA from Moonshot; reliance on third-party.
- **Context window: 78/100.** 256K / 262,144 tokens verified. Below 1M tier.
- **Multimodal: 72/100.** Text, image, video input → text output via MoonViT.
- **Coding: 68/100.** Kimi Code Bench v2 62.0 vendor, Program Bench 53.6, MLS Bench Lite 35.1. DeepSWE 31% Together AI. Coding-focused but internal benchmarks only.
- **Cost efficiency: 72/100.** $0.95/$4 per 1M; competitive for coding model.
- **Overall Score: 67.6/100.** Mean of Tool 62, Reasoning 58, Context 78, Multimodal 72, Coding 68. Strong coding specialization with limited public standard benchmark coverage.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
