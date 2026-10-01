# Qwen3.5 9B — findings by Big Pickle

- Source: Alibaba (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 9B (Qwen Team / Alibaba Cloud). Open-weights vision-language model; the reasoning variant is the default behaviour (thinking on by default, switchable through API parameters, not via a `/think` token).
- **Short description:** The 9B member of Alibaba's Qwen3.5 Small Model Series (unveiled 2026-03-02, blog dated February 2026), positioned as the compact reasoning/multimodal tier of the family. Vendors claim it beats models an order of magnitude larger (gpt-oss-120B) on most language benchmarks. Distinct from `Qwen3.5-4B`, `Qwen3.5-27B`, and the MoE `Qwen3.5-122B-A10B` / `Qwen3.5-397B-A17B`; the "9B" here is a dense hybrid, not a small MoE.
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-9B`, Apache 2.0), plus 13 hosted routes. OpenRouter `qwen/qwen3.5-9b`, SiliconFlow `Qwen3.5-9B`, DeepInfra, Fireworks (`accounts/fireworks/models/qwen3p5-9b`), Together, OVHcloud, Modular, Venice, Parasail, Prime Intellect, Regolo, Darkbloom. Alibaba Cloud Model Studio / DashScope OpenAI-compatible endpoint `https://dashscope.aliyuncs.com/compatible-mode/v1` with model `Qwen3.5-9B`. Self-host via vLLM / SGLang / Transformers — Chat Completions API (`--reasoning-parser qwen3`, `--tool-call-parser qwen3_coder`).
- **Release / knowledge:** announced 2026-03-02 with the Qwen3.5 Small Model Series (Qwen blog cited as February 2026); Artificial Analysis release date 2026-03-02; apxml records a 2026-02-24 card date. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-9B` (Hugging Face / vLLM / SGLang), `Qwen3.5-9B` (DashScope), `qwen/qwen3.5-9b` (OpenRouter). **No OpenCode Zen free ID exists for this model** — it is evaluated on paid per-token pricing.
- **Context window:** **262,144 tokens natively**, "extensible up to 1,010,000 tokens" via static YaRN RoPE scaling (`factor: 4.0`) per the vendor model card; Artificial Analysis and endpoints.run both list 262k as the served window. Max output recommended at 32,768 (81,920 for competition benchmarks). Native figure verified from the vendor config; the ~1.01M figure is an explicitly opt-in extension, not a native measurement.
- **Modalities:** text, image **and video** input; text output. Reasoning: yes (thinking by default; `enable_thinking: false` on Model Studio, `chat_template_kwargs` elsewhere; the `/think` soft switch is explicitly *not* supported). Tool calls: yes (`qwen3_coder` tool-call parser, Qwen-Agent / Qwen Code recommended). JSON/structured output: supported through the OpenAI-compatible surface and thinking-mode parameters.
- **Pricing (as of 2026-10-01):** hosted routes cluster at **$0.10 in / $0.15 out per 1M** (OpenRouter, SiliconFlow, Venice, DeepInfra); cheapest observed **$0.08 / $0.13** (Darkbloom, cached $0.04); Together and Modular $0.17 / $0.25; Prime Intellect $0.18 / $0.54. Artificial Analysis median across providers: **$0.14 in / $0.20 out**, blended $0.14 at a 7:2:1 cache/input/output ratio, **$0.21 per Intelligence Index task** (#15/142 in its small open-weight reasoning class). No free Zen tier and no hosted free window; self-hosting at Apache 2.0 is the $0 route.
- **Architecture:** **9.65B total parameters, dense** (all active at inference), Apache 2.0 open weights. Causal LM with a vision encoder; 32 layers, hidden dimension 4096, FFN intermediate 12288; hybrid layout `8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN))` — 32 linear-attention heads (16 for QK) at head dim 128, 16 attention heads (4 for KV) at head dim 256, RoPE dim 64, vocab 248320 (padded). Multi-token prediction trained for speculative decoding. Note: the family's "Gated Delta Networks + sparse MoE" marketing line applies to the larger members; the 9B card itself is the hybrid dense layout above.

### Raw benchmarks found

Vendor-reported (Qwen model card, `Qwen/Qwen3.5-9B`, thinking mode unless stated):

Agent / tool use:

- TAU2-Bench: **79.1%** (vendor harness; airline domain uses the Claude Opus 4.5 system-card fixes, so it is not directly comparable to a clean τ² run)
- BFCL-V4 (function calling): **66.1%**
- VITA-Bench: **29.8%**
- DeepPlanning: **18.0%**
- OSWorld-Verified: **41.8%**
- ScreenSpot Pro (visual agent grounding): **65.2%**
- AndroidWorld: **57.8%**
- Terminal-Bench 2.1: no verified public score found (vendor publishes no TB row for the 9B)

Independent measurements (Artificial Analysis, relayed by endpoints.run, data updated 2026-10-01):

- Terminal-Bench 2.1: **29.2%** (AA-measured)
- Terminal-Bench Hard: **24.2%** (AA-measured)
- τ³-Banking: **7.0%** (AA-measured)
- τ²-bench: **86.8%** (AA-measured; reported by endpoints.run as informational because the Intelligence Index uses τ³)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **11** / **#34 of 142** in the small (4B–40B) open-weight reasoning class; class median 8 (AA model page). An earlier index revision listed 22 for the same model — index-version drift, not two results.
- GPQA Diamond: **80.6%** (AA-measured) / **81.7%** (vendor; Hugging Face eval-results tab confirms 81.7 on `Idavidrein/gpqa` diamond)
- MMLU-Pro: **82.5%** (vendor; HF eval-results tab confirms 82.5)
- MMLU-Redux 91.1% / C-Eval 88.2% / SuperGPQA 58.2% (vendor)
- Humanity's Last Exam: **14.9%** (AA-measured)
- CritPt: **0.3%** (AA-measured)
- AA-Omniscience Accuracy: **16.4%**; Hallucination Rate: **83.6%** (AA-measured; Omniscience scalar −53.467)
- AA-LCR v1.1 (long-context reasoning): **70.0%** (AA-measured) / 63.0 on the older AA-LCR in the vendor table
- LongBench v2: 55.2% (vendor)
- IFEval: 91.5% (vendor); IFBench: 66.7% (AA-measured) / 64.5 (vendor)
- Math: HMMT Feb 25 **83.2%**, HMMT Nov 25 **82.9%** (vendor)
- Artificial Analysis Coding Index 28.7, Agentic Index 37.4, Quality Index 25.0 (BenchGecko relay of AA)

Coding:

- LiveCodeBench v6: **65.6%** (vendor)
- OJBench: **29.2%** (vendor)
- SciCode: **29.5%** (AA-measured)
- SWE-bench Verified / SWE-bench Pro: no verified public score found (not published for this size tier)
- Vibe Code Bench / DeepSWE / Coding Index composite: no independently measured score beyond the AA Coding Index 28.7 above

Long context:

- AA-LCR v1.1 **70.0%** at AA's long-context harness — the one genuine measured retrieval/reasoning number for the window; the 262K native / ~1.01M YaRN window itself is a spec, not a measured recall result.
- LongBench v2 55.2% (vendor) as a second, weaker long-context signal.

Multimodal:

- MMMU-Pro: **70.1%** (vendor) / **69.2%** (AA-measured) — above Gemini-2.5-Flash-Lite 59.7 and Qwen3-VL-30B-A3B 63.0 on the vendor table
- MMMU 78.4%, MathVision 78.9%, Mathvista-mini 85.7%, We-Math 75.2%, DynaMath 83.6%, VlmsAreBlind 93.7% (vendor)
- Documents/OCR: OmniDocBench1.5 **87.7%**, OCRBench 89.2%, CC-OCR 79.3%, CharXiv(RQ) 73.0%, MMLongBench-Doc 57.7% (vendor)
- Video: VideoMME (with subtitles) **84.5%**, VideoMME (no subs) 78.4%, VideoMMMU 78.9%, MLVU 84.4%, MVBench 74.4%, LVBench 70.0% (vendor)

### Normalized scores (1–100)

- **Tool use: 58/100.** Function calling is genuinely strong (BFCL-V4 66.1%, IFBench 66.7%, Qwen-Agent/Qwen Code first-class) and the τ²-bench 86.8% figure shows real multi-turn tool competence — but the two anchors the methodology weights most, Terminal-Bench 2.1 at 29.2% and τ³-Banking at 7.0% (both AA-measured), sit below the mid band of 45–60% / 10–25%, and VITA-Bench 29.8% / DeepPlanning 18.0% confirm it. No GDPval-AA or Claw-Eval number exists, which is the standing N/A penalty. Best-in-class grounding helps tool use (ScreenSpot Pro 65.2%) without lifting end-to-end agentic scores.
- **Reasoning: 62/100.** Above the methodology's mid band on academic knowledge and math (GPQA 80.6–81.7%, MMLU-Pro 82.5%, HMMT 83.2/82.9%) and strong on long-context reasoning (AA-LCR 70.0%), but capped by HLE 14.9%, CritPt 0.3%, an AA-Omniscience accuracy of 16.4% with an 83.6% hallucination rate, and an Intelligence Index of 11 against a class median of 8 — frontier-style synthesis and calibration, not knowledge, is the weak axis.
- **Context window: 76/100.** 262,144 native tokens places it in the 200K–500K band (65–84, with 200K = 70); the ~1.01M YaRN extension is opt-in and unscored. Earns the top of its band rather than the floor because long-context behaviour is actually measured: AA-LCR v1.1 70.0%, comfortably above the class it is compared against, plus LongBench v2 55.2%.
- **Multimodal: 87/100.** Text, image and video in with text out sits in the methodology's "+video/PDF in = 75–90" band, and this model is at the strong end of it rather than the floor: MMMU-Pro 69.2–70.1% beating models 30x its size, OmniDocBench 87.7% and OCRBench 89.2% for document work, VideoMME 84.5% with subtitles. Held below 90 because there is no audio input and no non-text output path, so the 90–100 tier does not apply.
- **Coding: 52/100.** Below the methodology's mid band: LiveCodeBench v6 65.6% (the band assumes ~80%) and SciCode 29.5%, with OJBench 29.2% and an AA Coding Index of 28.7. No SWE-bench, no DeepSWE, no Vibe Code Bench — a compact generalist that writes and reads code competently but has no measured repository-level or agentic software-engineering result.
- **Cost efficiency: 98/100.** $0.10 in / $0.15 out per 1M on the mainstream routes (OpenRouter, SiliconFlow, DeepInfra), cheapest observed $0.08 / $0.13, AA median $0.14 / $0.20 — squarely in the ~$0.10/$0.20 = 97–99 band. Docked slightly for the absence of any free tier (no Zen free ID, no hosted free window), for provider-level training policies being unknown across routes, and for real measured verbosity: 220M output tokens on the Intelligence Index versus an 82M class median, which pushes cost per task to $0.21 despite the low sticker price.
- **Overall Score: 67/100.** (58 + 62 + 76 + 87 + 52) / 5 = 67.0. Best fit: a cheap local/hosted multimodal workhorse — vision, video, documents, OCR and 262K of context at ~$0.10/$0.15 — for teams that need broad input coverage on a small budget; pair it with a stronger planner for multi-step agentic or repository-scale coding, where its Terminal-Bench 2.1 (29.2%) and τ³-Banking (7.0%) results are the binding constraint.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-01
- Method: public internet research (Qwen's official Hugging Face model card and benchmark tables, the Qwen3.5 blog reference, Artificial Analysis model page and relayed evaluation figures via endpoints.run, endpoints.run's 13-provider pricing table, VentureBeat and deeplearning.ai launch coverage, BenchGecko/llm-stats aggregator relays, apxml and llmbase spec mirrors). Scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported and independently measured numbers are labelled separately; the Independent-measured (Artificial Analysis) set was preferred wherever both existed, and no figure was carried over from another Qwen3.5 member.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.