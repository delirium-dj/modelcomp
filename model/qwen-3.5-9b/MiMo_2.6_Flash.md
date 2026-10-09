# Qwen 3.5 9B — findings by Mimo v2.6 Flash

- Source: Alibaba/Qwen (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-09 (UTC; original research 2026-10-01, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B (Qwen 3.5 9B)
- **Short description:** Alibaba's compact 9B dense multimodal foundation model from the Qwen 3.5 small series — unified vision-language design aimed at local/edge coding, RAG and agent workloads. Standalone entry, not a variant of another tracked model.
- **Provider / access:** Self-host (Hugging Face `Qwen/Qwen3.5-9B`, Ollama `qwen3.5:9b`) or OpenAI-compatible Chat Completions via OpenRouter, DeepInfra, Together AI, SiliconFlow, Venice, Parasail. NOT on OpenCode Zen (verified against `opencode.ai/docs/zen` and the models.dev OpenCode provider list, 2026-10-01 — no `qwen-3.5-9b` id present; the `opencode/qwen-3.5-9b` id in this folder's `meta.json` could not be verified on any live route).
- **Release / knowledge:** 2026-03-02 (Qwen 3.5 compact wave: 9B/4B/2B/0.8B); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-9B` (Hugging Face / DeepInfra), `qwen/qwen3.5-9b` (OpenRouter), `accounts/fireworks/models/qwen3p5-9b` (Fireworks). **No Zen Free ID exists** (checked 2026-10-01).
- **Context window:** 262,144 tokens native (262K — Fireworks, DeepInfra, OpenRouter, TokenRate), vendor-claimed extensible to 1,000,000; max output ~235,929 tokens (TokenRate, 2026-08-28).
- **Modalities:** text, image, video in; text out; thinking/reasoning mode; tool calls; JSON/structured outputs; 201 languages.
- **Pricing (as of 2026-10-01):** $0.10 in / $0.15 out per 1M tokens (OpenRouter, DeepInfra, Venice, SiliconFlow), cached input $0.10 (DeepInfra); cheapest tracked input $0.065 (OpenRouter); Together $0.17/$0.25. Apache 2.0 weights make $0 self-hosting viable.
- **Architecture:** 9.4B parameters (Fireworks), dense decoder-only with a 3:1 hybrid of Gated DeltaNet and Gated Attention (32 layers, hidden 4096), unified vision encoder; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench: **79.1%** (official Qwen3.5 model-card table via Dell Enterprise Hub; airline domain excluded per the Claude Opus 4.5 system-card fix note)
- BFCL-V4: **66.1** (same official table)
- VITA-Bench: 29.8 (official table)
- DeepPlanning: 18.0 (official table)
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (Qwen official release coverage — abit.ee 2026-03-02 and Medium/Miles K. 2026-04-20 both cite the Qwen number; one aggregator instead lists 78.6, harness unknown)
- MMLU-Pro: **82.5** (official table; vs GPT-OSS-120B 80.8, Qwen3-30B-A3B 80.9)
- MMLU-Redux: 91.1 / C-Eval: 88.2 / SuperGPQA: 58.2 / MMMLU: 81.2 / MMLU-ProX: 76.3 (official table)
- HMMT Feb 2025: 83.2, HMMT Nov 2025: 82.9 (official table)
- HLE / LCR / MRCR / Artificial Analysis Intelligence Index: no verified public score found

Coding:

- LiveCodeBench v6: **65.6** pass@1 (official table; llm-reference observed 2026-06-07 — vs GPT-OSS-120B 82.7, Qwen3-30B-A3B 66.0)
- OJBench: 29.2 (official table)
- HumanEval pass@1: 82.0% (community eval framework, GitHub `siddhartth04/Qwen3.5-9B-Benchmark-Test`, 50 samples, greedy — provisional proxy, small sample)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Terminal-Bench: no verified public score found

Long context:

- LongBench v2: 55.2 (official table)
- Needle-in-a-Haystack: 100% retrieval (same community framework as HumanEval — proxy only)

Multimodal (official Qwen table via Dell Enterprise Hub + release coverage):

- MMMU: 78.4 / MMMU-Pro: **70.1** (vs Gemini 2.5 Flash-Lite 59.7)
- MathVista (mini): 85.7 / MathVision: 78.9 / We-Math: 75.2
- Video-MME (with subtitles): 84.5 (Qwen release coverage via Medium 2026-04-20); without subtitles **78.4** (HF card 2026-10-09)
- Vision-agent / document stack (HF official table, re-captured 2026-10-09): **OSWorld-Verified 41.8**, ScreenSpot Pro 65.2, AndroidWorld 57.8, TIR-Bench 45.6/31.9, V* 90.1/88.5, CharXiv(RQ) 73.0, OmniDocBench 1.5 87.7, OCRBench 89.2, AI2D 90.2, MMLongBench-Doc 57.7, VideoMMMU 78.9, MLVU 84.4, LVBench 70.0, SLAKE 79.0, MedXpertQA-MM 49.9, DynaMath 83.6, CountBench 97.2, LingoQA 80.4

### Normalized scores (1–100)

- **Tool use: 72/100.** TAU2-Bench 79.1 and BFCL-V4 66.1 are unusually strong for a 9B (TAU2 beats several frontier open models' mid-2026 numbers); the new visual-agent rows (OSWorld-Verified 41.8, AndroidWorld 57.8 — 2026-10-09) add grounded-agent evidence but are computer-use, not terminal/GDPval; still capped by missing Terminal-Bench/GDPval/Claw-Eval numbers and weak DeepPlanning (18.0) — held.
- **Reasoning: 72/100.** GPQA-D 81.7 and MMLU-Pro 82.5 sit just above the mid band with HMMT ~83 math strength; capped by no HLE/LCR/long-context reasoning evidence and SuperGPQA 58.2.
- **Context window: 74/100.** 262K native lands in the 200K–500K tier (65–84); LongBench v2 55.2 shows real but imperfect long-context use; the 1M extension is a vendor claim with no measured retrieval at that depth.
- **Multimodal: 83/100.** Native text/image/video in with MMMU-Pro 70.1, MathVista 85.7, Video-MME 84.5/78.4 — plus the newly captured grounded stack (**OSWorld-Verified 41.8**, ScreenSpot Pro 65.2, CharXiv 73.0, OCRBench 89.2, all HF 2026-10-09) — exceptional vision-agent depth for a 9B; still capped by no audio input and text-only output; +1 on the fill (was 82).
- **Coding: 66/100.** LiveCodeBench v6 65.6 and OJBench 29.2 place it mid-band for its size, but zero SWE-bench/DeepSWE/SciCode/Terminal-Bench evidence leaves repo-level agentic coding unproven.
- **Cost efficiency: 97/100.** $0.10/$0.15 per 1M (no free ID) matches the ~$0.10/$0.20 → 97–99 tier; Apache 2.0 self-host drops effective cost to $0.
- **Overall Score: 73/100.** (72 + 72 + 74 + 83 + 66) / 5 = 73.4 → half-up 73 (was 73.2 — Multimodal +1 on the visual-agent fill, Overall unchanged). Best fit: cheap local/on-prem multimodal coder and agent executor with standout TAU2 tool use and OSWorld-class visual grounding for its size.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-09 (original: 2026-10-01; user-approved second pass); second-pass sources: [HF Qwen/Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B) (full official vision/vision-agent tables re-captured 2026-10-09) — AA has no page for the 9B (404)
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.

---

### Deep-research addendum (2026-10-09)

- **Gaps closed (HF official table):** OSWorld-Verified **41.8**, ScreenSpot Pro 65.2, AndroidWorld 57.8, TIR-Bench 45.6, V* 90.1, CharXiv(RQ) 73.0, OmniDocBench 87.7, OCRBench 89.2, Video-MME w/o subs 78.4, VideoMMMU/MLVU/LVBench, medical VQA rows.
- **Confirmed:** MMMU-Pro 70.1, MathVista 85.7, We-Math 75.2 and the first-pass multimodal numbers all match the current card.
- **Scores:** Multimodal 82→83; Tool (72), Reasoning (72), Context (74), Coding (66), Cost (97) unchanged; **Overall 73 held**.
