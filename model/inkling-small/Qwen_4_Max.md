# Inkling-Small — findings by Qwen 4 Max

- Source: Vendor (Thinking Machines Lab) + independent trackers; subject slug `inkling-small`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Inkling-Small (`inkling-small`)
- **Short description:** Thinking Machines Lab's efficient open-weights MoE — "comparable performance to Inkling at a quarter of its size" (276B/12B vs 975B/41B). Surpasses Inkling on reasoning and agentic coding; Inkling keeps the edge on knowledge coverage/factuality.
- **Provider/access:** Full weights on Hugging Face (`thinkingmachines/Inkling-Small`, Apache 2.0 per AA); fine-tuning on Tinker (limited-time launch discount); text/image/audio chat on Tinker Playground; 2 AA-tracked API providers (incl. Together dedicated endpoints, contact pricing). Trained on NVIDIA GB300 NVL72 systems.
- **Release/knowledge:** Released July 30 2026 (AA); forecasting evals run July 19–28 2026. Post-trained from an Inkling-Small (preview) checkpoint via on-policy distillation with Inkling as teacher, then two more weeks of agentic-coding RL.
- **IDs:** `inkling-small`; HF `thinkingmachines/Inkling-Small`. Distinct from Inkling (975B/41B) and Inkling-2-Small.
- **Context window:** Up to 1M tokens (official + AA + BenchLM; a LinkedIn listing's 256K is a labelled conflict). Coding evals use a 256K max-token trajectory limit.
- **Modalities:** Text + image + audio (speech) in; text out. Native encoder-free multimodal architecture: audio as dMel spectrograms, images as 40×40-pixel patches through a 4-layer hMLP, joint embedding with text. Python-assisted visual inspection (crop/zoom).
- **Pricing (as of 2026-11-12, per 1M tokens):** $0.30 in / $1.20 out, 80% cache discount (AA); **$0.20 per Intelligence Index task**, blended $0.22. Official post confirms $1.20 output (Inkling: $4.05). Self-host free under Apache 2.0.
- **Architecture:** MoE transformer, **276B total / 12B active (official; AA lists 266B — labelled conflict)**. Hybrid reasoning with variable effort minimal/low/medium/high/xhigh (evals at effort 0.99, temp 1.0); AA tracks the reasoning version.

### Raw benchmarks found

Vendor-reported (Thinking Machines launch post; all evals effort 0.99; AA/Scale/ARC-Prize/FRI numbers cited as externally reported):
- Agentic coding: SWE-Bench Verified 80.2, SWE-Bench Pro public 55.9, Terminal-Bench 2.1 best-harness 64.7, SciCode 48.7.
- Agentic general: GDPval-AA v2 1269 Elo (23k out tokens/task), MCP Atlas 79.6 public/79.2 all, τ³-Banking 15.5, BrowseComp 77.4 (context management), Toolathlon Verified 54.4, AA-Briefcase 917.
- Reasoning: GPQA Diamond 89.5, HLE 31.6 text-only / 47.8 tools, AIME 2026 95.5, HMMT Feb 2026 90.2, CritPt 8.3, ARC-AGI-1 84.0 / ARC-AGI-2 40.1 (ARC Prize).
- Factuality/chat: SimpleQA Verified 20.6 (vs Inkling 43.9), AA Omniscience −9.0, IFBench 82.2, Global-MMLU-Lite 86.7. **AA Index v4.1: 40.0** (launch-era version).
- Vision/audio: MMMU-Pro Standard-10 74.0, CharXiv RQ 77.4/81.3 with Python, Audio MC 54.9 (class-leading vs MiMo V2.5 30.4, Qwen3-Omni 24.3), MMAU 77.0, VoiceBench 90.1.
- Epistemics: ForecastBench Brier 61.3 no-search / 61.5 with-search (beats Inkling 60.1/61.0); Prophet Arena 0.1238. Safety: StrongREJECT 98.4, FORTRESS adversarial 71.6 / benign 96.9.

Independent runs:
- Artificial Analysis (reasoning, v5.0.1, live 2026-11-12): **Intelligence Index 13, #22/27** (class median 23) — far below the launch-era v4.1 reading of 40.0 (version change, never averaged). GDPval-AA v2.1 1191 (31.2%), Agentic 24.9, EnterpriseOps 42.7, Coding 53.0, SciCode 49.7, GPQA-D 89.5, AA-HLE 33.3, LCR 75.7, MMMU-Pro 74.0, Omniscience −9.5 (accuracy 31.8, hallucination 60.5). Performance: 80 tok/s, TTFT 23.49s, **7.7 min/task** (median 12.7), 71.6M output tokens (concise; median 104M).
- Vals AI: SWE 82.2, TB2.1 55.1, LiveCodeBench 85.9, GPQA 83.6, MMLU-Pro 85.6. Epoch AI FrontierMath: 46.316 / Tier-4 17.073.
- BenchLM aggregate: 49.95/100, **#97 of 1026** (44/815 rows; classified Hybrid).

### Normalized scores (1–100)

- **Tool use: 77/100.** MCP Atlas 79.6 and BrowseComp 77.4 are strong, but τ³-Banking 15.5, AA Agentic 24.9, GDPval 1191 (31.2%), TB2.1 64.7 (Vals 55.1) and Toolathlon-V 54.4 show mid-tier agentic execution — below Qwen3.7-Plus (79) on breadth, above its GDPval.
- **Reasoning: 76/100.** GPQA 89.5, HLE 47.8 tools, AIME26 95.5, HMMT 90.2, ARC-2 40.1 are solid; dragged down by CritPt 8.3, FM 46.3/17.1, SimpleQA 20.6, Omniscience −9.5 (60.5% hallucination), and the v5.0.1 index collapse to 13 (v4.1 was 40 — harder eval mix, labelled not averaged).
- **Context window: 80/100.** 1M tokens with LCR 75.7 (AA) — good retrieval, no surcharge reported; below the LCR-82+ tier (Sonnet 5 89, GPT-5.4 87) and above Gemini 2.5 Pro (76, LCR 69 + surcharge).
- **Multimodal: 80/100.** Native audio+image (encoder-free): Audio MC 54.9 leads its open-weights class, MMAU 77.0, VoiceBench 90.1, MMMU-Pro 74.0, CharXiv 81.3 with Python crop/zoom. No video; vision scores mid-pack vs omni specialists.
- **Coding: 79/100.** SWE-V 80.2 (Vals 82.2), LCB 85.9, SWE-Pro 55.9, SciCode 48.7/49.7 — strong verified-issue resolution; TB2.1 64.7 best-harness (Vals 55.1) and AA Coding 53.0 keep it below the 82+ coding tier.
- **Cost efficiency: 90/100.** $0.30/$1.20 with 80% cache, $0.20/task (cheaper than M3's $1.29), 80 tok/s, 7.7 min/task, concise 71.6M tokens, Apache 2.0 self-host option; Tinker fine-tuning discount. Deducted for 23.49s TTFT and mid-pack per-token price vs $0.10–0.15 flash tiers.
- **Overall Score: 78.4/100.** Mean of the five quality dimensions (Cost excluded): (77+76+80+80+79)/5 = 78.4. A balanced, cheap, audio-capable open-weights generalist that beats its 975B parent on reasoning/agentic coding, but the v5.0.1 independent index (13) and weak factuality/terminal-agentic rows cap it below the 82+ flash tier.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Thinking Machines official launch post, Artificial Analysis live, BenchLM, Vals/Epoch via trackers, Together/LinkedIn snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: parameters (276B official/Together vs 266B AA); context (1M official/AA/BenchLM vs 256K LinkedIn); AA Index (40.0 launch-era v4.1 vs 13 live v5.0.1 — version change); GDPval-AA (1269 v2 vendor-cited vs 1191 v2.1 AA live); TB2.1 (64.7 best-harness vendor vs 55.1 Vals); Omniscience (−9.0 vendor-cited vs −9.5 AA live); HLE (47.8 tools vendor vs 33.3 AA).
- Reference URLs:
  - [Introducing Inkling-Small — Thinking Machines Lab](https://thinkingmachines.ai/news/inkling-small/)
  - [Inkling-Small model card — Thinking Machines Lab](https://thinkingmachines.ai/model-card/inkling-small/)
  - [Inkling Small Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/inkling-small)
  - [Inkling-Small Benchmark Scores — BenchLM](https://benchlm.ai/models/inkling-small)
  - [Inkling-Small weights — Hugging Face](https://huggingface.co/thinkingmachines/Inkling-Small)
  - [Thinking effort cookbook — Tinker Docs](https://tinker-docs.thinkingmachines.ai/cookbook/inkling/thinking-effort/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.