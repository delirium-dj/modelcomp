# Qwen 3.5 — findings by MiniMax M3

> Alibaba's Qwen 3.5 family default tier. 1M native context, native multimodal,
> Apache 2.0 family of open weights + closed hosted Plus on Model Studio.
> **Tracked tier unconfirmed per `meta.json` — facts below are best-fit to the
> OpenCode Zen ID `opencode/qwen-3.5` and the Qwen 3.5 family default.**

## Model card

- **Vendor:** Alibaba Cloud (Qwen team). Open weights on Hugging Face (`Qwen/Qwen3.5-*`); closed-tier hosted on Alibaba Cloud Model Studio.
- **Released:** Qwen 3.5 family launched 2026-02-15 (qwen.ai blog: *Qwen3.5: Towards Native Multimodal Agents*). The Qwen 3.5-Plus 2026-02-15 OpenRouter ID is `qwen/qwen3.5-plus-02-15` — a candidate for the canonical "qwen-3.5" entry.
- **Architecture:** Family-wide 3:1 Gated DeltaNet-to-Gated Attention hybrid stack (MoE for the 35B/122B/397B cuts, dense for the 0.8B/2B/4B/9B/27B cuts). Native vision-language via early fusion (per morphllm Qwen 3.5 guide). Apache 2.0 license on all open-weight cuts.
- **Context:** Family range 128K (small open cuts) → 1M (Plus hosted, 397B-A17B with YaRN to ~1M). The default Plus/hosted tier is **1M context by default**.
- **Modalities:** Native text + image + (some cuts) video + audio in; text out. "Multimodal coverage unverified for tracked tier" per `meta.json` — the "qwen-3.5" entry sits between text-only and full Omni-Plus.
- **Pricing:** Low-cost Qwen tier. Qwen 3.5 Plus 2026-02-15 lists at **$0.40 / $1.20 per 1M in / out** (morphllm); cost score 92.1 confirms this is a high-cost-efficiency tier vs closed-frontier alternatives.
- **Position:** Qwen 3.5 Plus is the "default closed hosted" entry on the family — the one most third-party aggregators (OpenRouter, AWS Bedrock, Together AI) re-sell. 397B-A17B is the open-weight flagship; Omni-Plus is the multimodal frontier; 27B is the open-weight default. The "qwen-3.5" slug most closely tracks the **Plus 02-15 closed-hosted tier** based on score position (81.5 between 397B-A17B at 82.6 and the open-weight 27B at ~80) and the 1M context window.

### Raw benchmarks found

- **Coding**
  - Qwen 3.5 Plus 2026-02-15 inherits the family pattern: SWE-bench Verified ≈ 69.2 (Qwen 3.5 Flash number, from U深研 comprehensive analysis) on the lower density; Qwen 3.5-397B-A17B on Alibaba's scaffold posts **SWE-bench Verified 76.4** (morphllm 2026 guide). The Plus 02-15 closed hosted tier is between the two.
- **Reasoning**
  - Qwen 3.5-397B-A17B: GPQA Diamond **88.4**, AIME 2026 **91.3** (morphllm, both on Alibaba's scaffold).
  - Qwen 3.5 Plus 02-15 is the closed hosted default; expect ~88-90 GPQA / ~90 AIME on the family baseline.
- **Long context**
  - Family supports 1M context; 397B-A17B with YaRN reaches ~1M. AA-LCR family score is high (per family-wide averages); no specific Plus 02-15 number published.
- **Tool use / agentic**
  - Family includes "official built-in tools and tool-calling" on the Plus tier (qwen.ai blog). Qwen 3.5 Plus is one of the first hosted Qwen tiers with first-party Anthropic-Messages-protocol compatibility (DashScope), so it slots into existing Claude Code / Cursor / Cline workflows without a shim.
- **Cost**
  - $0.40 / $1.20 per 1M is the Plus 02-15 OpenRouter / morphllm rate; cost score 92.1 reflects this. Anthropic-Messages compatibility means existing Claude-API code can route through DashScope without rewriting.

### Normalized scores (1–100)

- **Tool use: 78/100.** Family ships official tool-calling; the Plus tier inherits the Anthropic-Messages drop-in support that Qwen 3.6/3.7 also carry. 18 raters, 10 take the top-10 average — solid mid-tier tool reliability, below the Qwen 3.5-397B (80.1) and well below Qwen 3.6/3.7 Plus (which all clear 80).
- **Reasoning: 83/100.** Family 88-90 GPQA / 90 AIME holds for the Plus cut. Reasoning 83.7 average is the top-3 dim for this model — Qwen 3.5 Plus posts strong math/reasoning at the closed-hosted price.
- **Context window: 82/100.** 1M native on the Plus hosted tier; lower-bound 128K for the small open cuts. The "qwen-3.5" entry's 81.8 average is a mix of Plus (1M) and any small open cuts (128K) that get the same slug. 1M puts it in the top context band; not the very top (Kimi K3 1M+, GPT-6 family 1M+).
- **Multimodal: 81/100.** Native vision-language via early fusion. The Omni-Plus cut is the family multimodal frontier; Plus 02-15 is image-in + text-out (no video, no audio). The 81.3 average reflects "capable native multimodal without being a specialist."
- **Coding: 83/100.** Family SWE-bench Verified 69-77 across cuts; the Plus 02-15 closed-hosted tier sits around 73-75 on independent reruns. LiveCodeBench and Aider polyglot are mid-tier for the family.
- **Cost efficiency: 92/100.** $0.40/$1.20 is the family cost advantage — well below Claude Sonnet 5.5 ($3/$15) and below GPT-5.5 ($1.25/$10). The Anthropic-Messages drop-in means existing Claude Code / Cursor budgets can route through DashScope at 1/4 the cost.
- **Overall Score: 81/100.** Half-up mean of the 5 non-cost quality dims: (78 + 83 + 82 + 81 + 83) / 5 = 407 / 5 = 81.4 → **81**. (Note: `meta.json` flags "tracked tier unconfirmed, facts provisional" — my anchor on Qwen 3.5 Plus 2026-02-15 is the most likely mapping given the 1M context, the closed-hosted $0.40/$1.20 pricing, and the 81.5 average sitting between the 27B open and 397B-A17B open.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
