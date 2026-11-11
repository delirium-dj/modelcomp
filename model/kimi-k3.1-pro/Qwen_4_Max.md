# Kimi K3.1 Pro — findings by Qwen 4 Max

- Source: Moonshot AI/kimi-k3.1-pro
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's most capable 3T-class open-weight model (API/apps Oct 23, 2026; full weights on Hugging Face by Nov 4) — a post-trained Kimi K3 with massively scaled joint RL across hundreds of domains. Trades blows with Opus 5.5 / GPT-6 Astra on vendor charts (HLE w/ tools 70.0, SWE-Marathon 51.7, TB4.0 65.7) while independent runs place it just off the frontier (AA #4 at launch, KingBench 6th/11). A Highspeed variant runs 2–3x faster at ~2x price.
- **Provider / access:** Kimi API (`kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`; OpenAI/Anthropic-compatible; Zero Data Retention available), kimi.ai + mobile apps (iOS/Android/HarmonyOS), Kimi Work 3.1.0+, Kimi Code, Kimi Business/Enterprise (off by default); third-party hosts Fireworks and Together at the same rate. Open weights: `moonshotai/Kimi-K3.1-Pro` (HF/ModelScope), vLLM/SGLang/TokenSpeed recipes.
- **Release / knowledge:** API 2026-10-23; weights by 2026-11-04 (HF repo live, updated ~Nov 6). Knowledge cutoff not stated in the sources read.
- **IDs:** `kimi-k3.1-pro` / `kimi-k3.1-pro-highspeed`; HF `moonshotai/Kimi-K3.1-Pro`.
- **Context window:** 1,048,576 tokens; max output not stated in the sources read (llm-stats lists 1M/1M, unverified). No long-context surcharge documented; cached input $0.20/M. AA-LCR 86.3% but MLCR-AA 38.3%; BrowseComp harness compacts at 200K.
- **Modalities:** Text + image in (native MoonViT-V2 vision encoder, 401M); text out. No audio/video input. `reasoning_effort` low/high/max (default max); multi-turn requires passing back `reasoning_content` + `tool_calls` verbatim.
- **Pricing (as of 2026-11-11):** $2 in / $10 out per 1M, cached input $0.20 — same on Moonshot, Fireworks, Together (~half of Opus 5.5's $4/$20, ~1/5 of Astra's $10/$50; ~1/3 below K3). Highspeed ~2x. Self-hosting possible but 2.8T-scale.
- **Architecture:** MoE, **2.8T total / 104B activated**; 93 layers (1 dense), 69 KDA + 24 Gated DSA attention (replaces K3's Gated MLA for long-context efficiency), 896 experts (16 selected + 2 shared), 160K vocab, SiTU-GLU; MXFP4 weights / MXFP8 activations with quantization-aware training. License: Kimi K3.1 Pro License (MIT-like; MaaS >$20M/12mo needs a Moonshot agreement; >100M MAU or >$20M monthly revenue needs prominent attribution). Cyber-related training data removed from the open release — downloadable weights may differ from the hosted API (pre-control checkpoint scored 90.5 vs final 81.0 on internal xdev-bench-hard).

### Raw benchmarks found

Vendor table (HF model card / launch blog; effort max, temp 1.0, top-p 0.95; Claude-Code/Kimi-Code harnesses; peers: Fable 5.1 / GPT-6 Astra / Opus 5.5 / DeepSeek-V4.1-Flash-1017 / GLM-5.3):

- Coding: Terminal-Bench 4.0 **65.7** (Opus 5.5 66.4, Astra 58.2); SWE-Marathon v1.1 **51.7** (best; Opus 46.3); DeepSWE v1.1 **75.5** (DS-1017 77.0); BenchCAD w/ tools **92.7** / w/o 72.8; ProgramBench binary **31.5** (Opus 65.0 — big gap); TB-Science 0.1 **38.1** (Astra 68.1); PostTrainBench v1.2 36.5; internal Kimi Code Bench 2.0 77.1 / 3.0 Long-horizon 61.2
- Agentic: HLE-Full w/ tools **70.0** (best; Opus 67.7, Astra 57.2); BrowseComp **92.1** (best); Agents' Last Exam **43.2** ALL / 44.2 CLI; AutomationBench-AA **73.3** (best); GDPval-AA v2.1 **1,846 Elo** (Opus 1,866); AA-Briefcase 1,678 (Opus 1,803); APEX-Agents 69.4 (Opus 73.5); OSWorld V2.1 **79.6** (Opus 81.8); OfficeQA Pro v2 **64.4** (best); Harvey Legal (AA Stirrup, 1,251 public, all-pass) **23.7** (best); HANDBOOK.md 44.6 (best); Frontier Finance 58.6; BioMysteryBench 80.6
- Reasoning/knowledge: GPQA-Diamond **94.2**; HLE-Full no tools **51.1** (Opus 59.8, Fable 57.6); HLE-Diamond **39.4** (Astra 65.8 — big gap); GDP.pdf 34.6 (best); Kimi Hallu Bench claim-level hallucination 5.4% no-tools / 8.3% Hard w-tools (K3: 23.4%; Astra 4.2/5.5 still ahead)
- Multimodal: MMMU-Pro **84.1** / w-Python **90.0** (best); CharXiv RQ 89.0 / w-Python 93.4; ZeroBench 29.8 avg@5 / 39.0 pass@5, w-Python 63.0 (best); GDP.pdf w-Python **85.7** (best); ChartoGraphy w-Python 90.2; BabyVision w-Python 95.4; PerceptionBench 68.3 (internal)
- Cyber (deliberately reduced): ExploitBench 74.7 (Astra 100, Opus 91.0); ExploitGym 20.7 (Astra 42.4); xdev-bench-hard 81.0 pass@3 (internal; uncontrolled checkpoint 90.5)

Independent runs:

- Artificial Analysis (via BenchLM, Nov 10): Intelligence Index **46.5** (version unstated) — MindStudio's Oct 24 review cites **55, #4 overall** behind Opus 5.5 (58) in the v4.3.2-era ranking: different AA versions, both labelled, never compared; AA TB4.0 **67.2** (above vendor 65.7); GDPval-AA **1,861** (leaderboard snapshot vs card's 1,846); AA-HLE 52.5; AA-LCR 86.3; MLCR-AA 38.3; AA-Omniscience 29.9 (hallucination 37.3%); Cyber Index 64.1; CyberGym-E2E-AA 94.7; CWE-Bench-AA 60.8; GDP.pdf 31.4; SciCode 60.8
- KingBench hands-on (6 practical builds): **53.7%, 6th/11** — behind Opus 5.5 (5.78/10), Astra (5.65), GPT-6.1 Sol (5.50), Argon (5.43), Haiku 5.5 (5.42); pattern: solid foundations, incomplete scope (Game Boy-only emulator, container runtime without build/exec), but honest about gaps; ~112M tokens ≈ $32/run-set — "chatty" cached-context rereading makes real bills exceed the headline rate (Haiku 5.5 scored higher at ~1/4 cost; DeepSeek V4.1 Flash close behind for <$2)
- Arena WebDev: **8th** (up from K3's 17th); Design Arena Website 1,320 (OpenRouter); BenchLM aggregate 74.64 (#13/1020)

### Normalized scores (1–100)

- **Tool use: 93/100.** Vendor-table leads on HLE-tools 70.0, BrowseComp 92.1, ALE 43.2, AutomationBench-AA 73.3, Harvey 23.7, OfficeQA v2 64.4; TB4.0 65.7/67.2 and GDPval 1,846–1,861 within touching distance of Opus 5.5; capped by KingBench 6th/11 scope-completion gaps, APEX 69.4 vs 73.5, and deliberately reduced cyber capability.
- **Reasoning: 89/100.** GPQA-D 94.2 and best-in-table HLE-with-tools 70.0; capped by parametric weakness — HLE-Full 51.1 / HLE-Diamond 39.4 far below Opus/Astra, AA index 46.5–55 (version-dependent) below the closed leaders, CritPt 24.6.
- **Context window: 93/100.** Full 1,048,576-token window, no documented surcharge, $0.20 cache reads, AA-LCR 86.3; capped by MLCR-AA 38.3 multi-hop weakness, 200K compaction in browsing harnesses, and unstated max output.
- **Multimodal: 78/100.** Elite image/document reasoning for a text+image model — MMMU-Pro 90.0 w-Python, GDP.pdf w-Python 85.7, ZeroBench 63.0, BenchCAD 92.7, BabyVision 95.4; no audio/video input or media generation keeps it below the native-AV Gemini class.
- **Coding: 90/100.** TB4.0 65.7 (AA 67.2), SWE-Marathon 51.7 best-in-table, DeepSWE 75.5, BenchCAD 92.7; capped by ProgramBench binary 31.5 vs Opus 65.0, TB-Science 38.1 vs Astra 68.1, FrontierCode 2.0 19.6, and KingBench's incomplete-scope pattern.
- **Cost efficiency: 80/100.** $2/$10 with $0.20 cache reads is half of Opus 5.5 and a fifth of Astra, plus open weights for self-hosting; capped by KingBench's $32 chatty-context bill (Haiku 5.5 beat it at ~1/4 cost), Highspeed's 2x rate, and 2.8T-scale serving requirements.
- **Overall Score: 88.6/100.** Mean of the five quality dims (93+89+93+78+90)/5 = 88.6. Best-fit: the strongest open-weight agentic/coding option at frontier-adjacent capability — finance/document pipelines, long-horizon SWE, self-hosted deployments; for pure per-token economy Haiku 5.5 / DeepSeek V4.1 Flash beat it on independent hands-on tests, and Opus 5.5/Astra still lead parametric reasoning.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Moonshot's official tech blog + full Hugging Face model card with per-benchmark harness footnotes, corroborated by BenchLM's sourced profile, llm-stats' provider rate card, and two MindStudio reviews incl. independent KingBench/Arena/AA results); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-vs-independent conflicts labelled, never averaged: AA Intelligence Index 55 (Oct 24, v4.3.2-era) vs 46.5 (Nov 10, version unstated) — AA versions not comparable; TB4.0 65.7 (vendor, Claude-Code harness) vs 67.2 (AA); GDPval-AA 1,846 (card v2.1) vs 1,861 (AA snapshot); Harvey Legal 23.7 (AA Stirrup all-pass) is a different harness from Google's ~10% chart and not mixed. Internal benchmarks (Kimi Code Bench, Hallu Bench, xdev-bench-hard, DECK-Arena, PerceptionBench) flagged as vendor-designed. Open-weight cyber-data removal noted (weights may differ from API). MindStudio's "GPT-6.1 Soul"/"Muse Wonderful" naming normalized to GPT-6.1 Sol / Muse Wonder.
- Reference URLs:
  - [Introducing Kimi K3.1 Pro — Moonshot AI](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Kimi-K3.1-Pro model card — Hugging Face](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
  - [Kimi K3.1 Pro benchmark profile — BenchLM](https://benchlm.ai/models/kimi-k3-1-pro)
  - [Kimi K3.1 Pro: Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/kimi-k3.1-pro)
  - [Kimi K3.1 Pro: Does It Really Beat GPT-6 Astra? — MindStudio](https://www.mindstudio.ai/blog/kimi-k3-1-pro-benchmarks-review)
  - [Kimi K3.1 Pro: Open-Weight Model Challenges Opus and Astra — MindStudio](https://www.mindstudio.ai/blog/kimi-k3-1-pro-open-weight-model)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.