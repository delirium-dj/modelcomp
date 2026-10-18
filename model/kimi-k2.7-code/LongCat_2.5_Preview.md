# Kimi K2.7 Code — findings by LongCat 2.5 Preview

- Source: Moonshot AI/kimi-k2.7-code
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** A coding-focused open-weights MoE model from Moonshot AI (June 2026), built on K2.6 with improved long-horizon coding, ~30% fewer thinking tokens, and native multimodal input (text, image, video). Modified MIT license.
- **Provider / access:** Moonshot AI API `moonshot/kimi-k2.7-code`, OpenRouter `moonshot/kimi-k2.7-code`, DeepInfra, Together AI, Baseten, Cloudflare Workers AI, Azure AI Foundry, Alibaba Cloud Model Studio, Fireworks AI. Open weights on Hugging Face `moonshotai/Kimi-K2.7-Code`. No Zen Free ID.
- **Release / knowledge:** Released 2026-06-12; knowledge cutoff January 2025.
- **IDs:** `kimi-k2.7-code`, `kimi-k2.7-code-highspeed` (no Free ID on Zen; paid only)
- **Context window:** 262,144 tokens (256K); max output 262,144 tokens (default 32K on Kimi platform).
- **Modalities:** Text + image + video input → text output; tool calls; structured output; web search; thinking mode (mandatory, cannot disable).
- **Pricing (as of 2026-10-18):** $0.95/MTok input, $4.00/MTok output (official); $0.67/$3.35 (OpenRouter); $0.68/$3.40 (DeepInfra); cache read $0.19. Open weights can be self-hosted.
- **Architecture:** 1T total / 32B active MoE; 384 experts (8 selected + 1 shared per token); 61 layers (1 dense); MLA attention; SwiGLU; MoonViT vision encoder (400M params); native INT4 quantization. Modified MIT license.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **76.0%** (official) / rank 6 of 7 in publisher table
- MCP Mark Verified: **81.1%** (official)
- Toolathlon Verified: **58.0%** (Armes)
- GDPval-AA v2.1: **1,115 Elo** (Armes)
- TAU-3 Banking: **20.2%** (Armes)
- TAU-2 Telecom: **90.1%** (Armes)
- TAU-2 Airline: **71.8%** (Armes)

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (Armes)
- HLE (no tools): **35.0%** (Armes)
- AA Intelligence Index: **42** (DataLLM Lab / rank 6 of 97) / **26** (AA page) / **41.9** (docsbot) — significant discrepancy across sources
- IFBench: **63.1%** (Armes)
- AA-LCR v1.1: **79.3%** (Armes)
- SimpleQA Verified: **36.5%** (Armes)
- AA-Omniscience: **-10.2** (Armes)
- LiveBench: **68.4** (Armes)
- FrontierMath Tier 4: **54.0%** (Armes)

Coding:

- SWE-bench Verified: **78.20%** (Vals AI / rank 32 of 88 / #1 open-weight)
- Terminal-Bench 2.1: **67.04%** (Vals AI / rank 37 of 75) / **67.4%** (Armes)
- Terminal-Bench 4.0: **44.7%** (Armes)
- LiveCodeBench: **82.05%** (Vals AI / rank 58 of 143)
- Vibe Code Bench: **47.21%** (Vals AI)
- DeepSWE: **31%** (rank 13 of 15)
- FrontierCode Extended: **39.5%** (Devin team)
- CursorBench 3.2: **49.7** (Cursor)
- Kimi Code Bench v2: **62.0** (official, in-house)
- Program Bench: **53.6** (official)
- MLS Bench Lite: **35.1** (official)

Long context:

- AA-LCR v1.1: **79.3%** (Armes)
- 262K token context window

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 76.0% and MCP Mark 81.1% are strong; Toolathlon 58.0% is moderate. Capped by mid-tier agentic benchmark performance.
- **Reasoning: 78/100.** GPQA Diamond 89.6% is good; HLE 35.0% is moderate. Capped by AA Intelligence Index discrepancy (26-42 depending on source) and AA-Omniscience -10.2 (poor factuality).
- **Context window: 80/100.** 262K tokens is solid but below the 1M+ frontier. No long-context surcharge.
- **Multimodal: 78/100.** Text + image + video input with MoonViT encoder; native multimodal. Capped by limited independent vision benchmark data.
- **Coding: 75/100.** SWE-bench Verified 78.2% (#1 open-weight, Vals AI), Terminal-Bench 67.0%, LiveCodeBench 82.05%. Capped by DeepSWE 31% (13/15) and vendor benchmarks being mostly in-house.
- **Cost efficiency: 82/100.** $0.95/$4.00 is very competitive for a 1T model; ~30% fewer thinking tokens than K2.6; open weights enable self-hosting. Capped by mandatory thinking mode (always-on cost).
- **Overall Score: 78/100.** Mean of (78+78+80+78+75)/5 = 77.8 → 78. A cost-efficient open-weights coding specialist with strong SWE-bench performance. Best for long-horizon coding tasks and budget-conscious deployments. Not a frontier generalist — trails closed models on reasoning and factuality.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (Moonshot AI official blog + HF model card, Artificial Analysis, Vals AI, DataLLM Lab, VentureBeat, Botmonster, Devin/FrontierCode, Armes, OpenRouter, LiteLLM, Cloudflare AI docs, QwenCloud, MarktechPost); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
