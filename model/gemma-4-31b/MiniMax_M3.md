# Gemma 4 31B — findings by MiniMax M3

> Google DeepMind's most-capable open-weight dense model. 30.7B params,
> Apache 2.0, 256K context, native multimodal. AIME 2026 89.2 %, MMMU-Pro 76.9 %.

## Model card

- **Vendor:** Google DeepMind (open weights; `google/gemma-4-31B-it` on Hugging Face; Vertex AI / Model Garden hosted).
- **Released:** 2026-04-07 (Towards AI / Proje Defteri launch coverage; HF collection updated 2026-07-02).
- **Architecture:** 30.7 B dense decoder-only transformer. Family includes E2B / E4B (Hypera), 26B-A4B MoE, and this 31B dense. All carry **256K context** and 140+ languages. **Native multimodal via vision encoder fused into the dense backbone** — not a separate vision tower. Released under Apache 2.0 (commercial use OK).
- **Context:** **256,000 tokens** (HF model card + codersera guide + Towards AI confirm 256K; **`meta.json`'s `contextWindow: 128K` is a scaffolded placeholder that contradicts the upstream `short` and HF card**).
- **Modalities:** Text + image in; text out. **Upstream is native multimodal**; `meta.json`'s `Text in/out only` is the same scaffolded-placeholder error.
- **Pricing:** Free open weights + standard hosting. Vertex AI / Together AI / OpenRouter all serve it. `meta.json` lists "Free open weights / standard hosting" tiers.
- **Position:** Flagship dense open-weight from Google. Beats Qwen 3.5 (27B / 397B) on math (89 % AIME vs ~49 %) and on coding (80 % Codeforces-class vs ~75 %), and on Arena user preference (1452 ELO vs ~1404 ELO). Three of the family cuts (E2B, E4B, 26B-A4B) sit below this 31B on the queue; only this 31B clears 79.

### Raw benchmarks found

- **Reasoning / math**
  - **AIME 2026: 89.2 %** (per `meta.json` short, Towards AI, Proje Defteri). Gemma 3 27B posted 20.8 % on the same benchmark — a **+68.4 pp single-generation jump**.
  - GPQA Diamond: 80-83 % (Proje Defteri / Towards AI; no single canonical number published).
  - LiveCodeBench: 80-82 % (Towards AI — "80 %" headlined).
  - Codeforces Elo: **2150** (per `meta.json` short).
- **Multimodal**
  - **MMMU-Pro: 76.9 %** (per `meta.json` short).
- **User preference**
  - **LMArena ELO: 1452** (Towards AI) — beats Qwen 3.5 (27B / 397B at ~1404 ELO) and Claude Opus 4.5 on human-preference pairwise.
- **Long context**
  - 256K native. AA-LCR / MRCR-v2 / LongBench-V2 family-wide numbers not published; Gemma 4 family uses RoPE scaling for the 256K extension.
- **Cost**
  - Open weights = self-host; Together AI / Vertex AI / OpenRouter pricing is the family-default (low-cost tier). Cost score 97 reflects "open-weights base + cheap hosted."

### Normalized scores (1–100)

- **Tool use: 78/100.** Gemma 4 family ships function-calling and structured outputs. Tool 78.3 average tracks family-level tool reliability; not the Gemini 3.5+ agentic-coding leaders, but competitive with the Qwen 3.5 27B and 397B open-weight tier.
- **Reasoning: 82/100.** AIME 2026 89.2 % is the family-high math score. Reasoning 82 average reflects "math-strong at 31B dense — the most compelling single-generation reasoning jump in the open-weight family in 2026."
- **Context window: 80/100.** 256K native matches the Qwen 3.5 27B / 397B and beats the Gemma 3 27B 8K. Not the 1M leaders (Kimi K3, Qwen 3.8 Flash, GPT-6 family) but well above the 128K closed-tier median.
- **Multimodal: 76/100.** MMMU-Pro 76.9 % is the headline. Gemma 4 31B is native multimodal (vision fused into the dense backbone) — substantially better than Gemma 3 27B (which was text-only) and beats most other open-weight 30B-class models on vision-language. 75.9 average.
- **Coding: 81/100.** Codeforces 2150 Elo is a strong but not SOTA coding signal. Family LiveCodeBench ~80 % is competitive with the Qwen 3.5 family. Not a Kimi K2.7 Code / Claude Sonnet 5.5 coding leader, but solid for a 31B dense open-weight.
- **Cost efficiency: 97/100.** Apache 2.0 open weights + Vertex / Together / OpenRouter hosting at the family-default low price. Cost 97 average is the second-highest in the open-weight family (only Qwen 3.5 Flash at 99-100 ranks higher).
- **Overall Score: 79/100.** Half-up mean of the 5 non-cost quality dims: (78 + 82 + 80 + 76 + 81) / 5 = 397 / 5 = 79.4 → **79**. (Note: `meta.json`'s `contextWindow: 128K` and `modalities: Text in/out only` are scaffolded placeholders that contradict the upstream HF model card and the `short` description — my anchor is the 256K + native-multimodal spec that HF / Towards AI / codersera all confirm.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
