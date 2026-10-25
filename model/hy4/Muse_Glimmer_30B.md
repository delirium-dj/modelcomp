# Hy4 Preview — findings by Muse Glimmer 30B

- Source: Tencent / hy4-preview
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Hy4 Preview
- **Short description:** Tencent Hy Team's open-weight MoE flagship preview released 2026-08-28, 770B total / 49B active per token with 1M context, aimed at long-horizon agentic coding, office analysis, game dev and scientific research workflows.
- **Provider / access:** Tencent Hy Team open weights; Hugging Face `tencent/Hy4-preview`, ModelScope, GitCode, CNB. Hosted API via B.AI `hy4-preview`, OpenRouter `tencent/hy4-preview`. Chat Completions API, OpenAI-compatible, supports function calling and structured output.
- **Release / knowledge:** 2026-08-28; knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/Hy4-preview`; B.AI `hy4-preview`
- **Context window:** 1M tokens total, 960K input max / 64K output max per B.AI docs; GitHub README specifies 1M context, 120832 vocab. Verified by official README and B.AI model page.
- **Modalities:** Text input, text output. Reasoning yes, tool calls yes, JSON mode / structured output supported. No native image/audio/video.
- **Pricing (as of 2026-10-25):** B.AI standard $0.834 /1M input, $0.834 /1M cache write, $0.042 /1M cache read, $2.501 /1M output. Hosted references ~$0.75/$2.25 per 1M in/out; self-host $0 via Apache 2.0 open weights. Free tier not offered on Zen.
- **Architecture:** Mixture-of-Experts, 770B total parameters, 49B activated per token. 78 layers, 256 routed experts +1 shared per MoE layer, top-8 routed + shared activated. 1 native MTP layer 10B total /0.7B active for speculative decoding. Gated DSA attention with IndexCache, iHC residual. Open weights Apache 2.0.

### Raw benchmarks found

> Sources: Tencent Hy4-preview GitHub README 2026-08-28, OpenLM.ai Hy4 benchmark table 2026-08-28, B.AI docs hy4-preview 2026-10-25. Vendor numbers are from the official benchmark appendix/OpenLM.ai compilation; independent re-tests are noted where available.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** vendor – OpenLM.ai benchmark table; **~55.1%** independent Vals reproduction noted in meta.json – conflict vendor vs independent.
- MCP-Atlas public: **83.7** – OpenLM.ai
- Toolathlon-Verified: **74.1** – OpenLM.ai
- GDPval-AA V2: **1678 Elo** – OpenLM.ai
- AutomationBench v1.0.6: **32.1** – OpenLM.ai
- BankerToolBench: **78.6** – OpenLM.ai

Reasoning / knowledge:

- GPQA Diamond: **92.3%** – OpenLM.ai
- HLE with tools text-only: **55.4%** – OpenLM.ai
- HLE no tools text-only: **43.4%** – OpenLM.ai
- CritPt official: **16.9** – OpenLM.ai
- ArXivMath: **66.6** – OpenLM.ai
- MathArena Apex 2025: **74.2** – OpenLM.ai

Coding:

- SWE-bench Multilingual: **82.9%** – OpenLM.ai
- SWE-bench Pro: **65.7%** – OpenLM.ai
- DeepSWE: **64.3** – OpenLM.ai
- SWE Atlas Codebase Q&A: **64.0** – OpenLM.ai
- SWE Atlas Test Writing: **57.8** – OpenLM.ai
- SWE Atlas Refactoring: **53.3** – OpenLM.ai
- Terminal-Bench 2.1 also reflects agentic coding; see Agent/Tool use above.

Long context:

- Context length reported 1M tokens; no public MRCR / RULER / GraphWalks retrieval scores verified. Vendor claims long-context productivity gains via internal 1M evaluations.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 85.4% vendor with MCP-Atlas 83.7 and Toolathlon 74.1 and GDPval 1678 Elo support strong agentic tool use; capped by conflicting independent Vals Terminal-Bench ~55.1% and lack of Claw-Eval.
- **Reasoning: 80/100.** GPQA Diamond 92.3% and HLE 55.4% with tools are frontier-level; HLE no tools 43.4% and CritPt 16.9 are modest, limiting the score versus top reasoning models.
- **Context window: 95/100.** 1M token window verified, competitive with frontier long-context models; no independent retrieval benchmark published.
- **Multimodal: 15/100.** Text-only input/output per official card and B.AI docs.
- **Coding: 84/100.** SWE-bench Multilingual 82.9%, SWE-bench Pro 65.7%, DeepSWE 64.3% and SWE Atlas Codebase Q&A 64.0% indicate strong agentic coding; limited by absence of public LiveCodeBench/SciCode numbers and lower SWE-Atlas refactoring.
- **Cost efficiency: 85/100.** Hosted pricing $0.834/$2.501 per 1M vs Muse Spark 1.3 $1.25/$4.25; open-weight self-host $0 under Apache 2.0 makes it cost-attractive for private infra.
- **Overall Score: 71.6/100.** Mean of five quality dims (84 + 80 + 95 + 15 + 84) /5 = 71.6 → 72 rounded. Best-fit: open-weight 1M-context agentic coder/reasoner for private deployment; multimodal and cost are strengths, independent tool-use verification is mixed.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
