# MiMo V2.5 Free — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: also covers the requested alias "Xiaomi MiMo-V2.5 Free" — same model/ID.

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi MiMo-V2.5)
- **Short description:** Xiaomi's open-weights (MIT) native omni-modal MoE for text, image, video, audio understanding plus agentic coding. Free capped tier on OpenCode Zen under the "MiMo V2.5 Free" name.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`) at `https://opencode.ai/zen/v1/chat/completions`; native Xiaomi API `mimo-v2.5` at `https://api.xiaomimimo.com/v1` (OpenAI-compatible; Anthropic protocol also supported); HF `XiaomiMiMo/MiMo-V2.5`
- **Release / knowledge:** 2026-04-22 (launch) / 2026-04-23 public beta / open-sourced 2026-06-29; Zen free-tier entry 2026-04-24; knowledge cutoff 2024-12
- **IDs:** Zen `opencode/mimo-v2.5-free`; native `mimo-v2.5`; HF `XiaomiMiMo/MiMo-V2.5` (+Base)
- **Context window:** native up to **1M tokens, max output 128K**; **Zen free tier capped at 200,000 context / 32,000 output** (models.dev)
- **Modalities:** text + image + video + audio in; text out. AA measured API as text+image only (did not verify audio/video). Reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-17):** Zen Free $0/$0/$0 (limited-time; data may be used). Native: cache-hit **$0.0028**, cache-miss **$0.14**, output **$0.28** per 1M (98% full cache discount after 2026-05-27 price cut).
- **Architecture:** 310B total / 15B active; hybrid SWA:GA 5:1 (window 128); 729M ViT + 261M audio encoder; 3 MTP layers; ~48T tokens pretraining FP8; license MIT.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.8%** (first-party, `harborframework/terminal-bench-2.0` eval results on the HF card — **corrects the 56.1 vendor figure cited on 2026-09-17**); Terminal-Bench 2.1: **63.7%** (BenchmarkList) / **60.7%** (Vals, #31/62); Terminal-Bench Hard: **41.7%** (BenchmarkList) / **42%** (AA relay)
- Tau2-Bench Telecom: **90.6%** (BenchmarkList) / **94.2%** pass@1 "Official" (evals.report) / **91%** (AA relay)
- Tau3-Banking: **8.7%** (BenchmarkList). Note: τ³-Banking has since been **dropped from the AA Intelligence Index v4.3.2** composition, so this is now a legacy anchor.
- GDPval-AA Elo: 1,146 (AA/BenchmarkList) vs 1,551 "Official" (evals.report) — different runs
- ClawProBench: **60.39** (13/48; field leader 2026-05-06 per BenchmarkList)
- Claw-Eval (first-party, HF eval results, Pass³ N=3): **General 62.1** (161 tasks) / **Multi-turn 63.2** (38 tasks) / **Multimodal 23.8** (101 tasks). The 65.8 "Claw-Eval Text" vendor figure cited on 2026-09-17 is superseded by the 62.1 General row.
- ResearchClawBench: **16.91** (first-party, HF eval results); MM-ClawBench **23.8%**; Gert Labs **46.89%**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- AA Intelligence Index: **25** (v4.3.2, estimated, #27/117, class median 18) — **was 22 on 2026-09-17**; the earlier **38** (v4.1.1) figure is a different index vintage and is not comparable. Composition of v4.3.2 changed since 2026-09-17: Terminal-Bench 4.0 and AA-Briefcase v1.1 and AutomationBench-AA and GDP.pdf are in, τ³-Banking and GPQA Diamond are out.
- HLE: **27.2%**; GPQA: **84.9%** (or 81.6 another run / 81.6% Vals); MMLU Pro: **82.9%**; MMMU-Pro: **77.9–80.0%** (Xiaomi self-reports 88.5); CharXiv **81%**; Video-MME (with subtitles) **87.7%**
- AA speed/latency re-measured 2026-10-01: **44.8 tok/s** (#52/117), **TTFT 9.37s** vs class median 68.8 tok/s / 2.27s — notably slow to first token.

Coding:

- SWE-bench Verified: **71.0%** (BenchmarkList, rank 46/72)
- SWE-bench Pro: **56.1%** (attribution ambiguous)
- LiveCodeBench: **81.5%**; SciCode: **43.1%**; Vibe Code Bench: **42.2%**
- AA Coding Index: **56.8**; WebDev Arena 1,437.9 Elo

Long context:

- AA-LCR: **68.3%**; Context Arena (MRCRv2 multi-needle) AUC @128K ~27–32%, **AUC @1M 14.3–15.8%** (independent) — 1M degradation visible
- GraphWalks: **no verified public score found** (HF card has images only)

### Normalized scores (1–100)

- **Tool use: 77/100.** TB2.1 63.7, Tau2 90.6, ClawPro 60.39 top-quartile; Tau3-Banking 8.7% caps. Raised from 75 on 2026-10-01 once Terminal-Bench 2.0 was confirmed at 65.8% in first-party eval results (the 56.1 vendor figure previously cited was stale) and the Claw-Eval subsets were split out — General 62.1, Multi-turn 63.2, Multimodal 23.8.
- **Reasoning: 70/100.** GPQA ~85, MMLU-Pro 82.9; HLE 27.2% mid.
- **Context window: 70/100.** Zen free cap 200K/32K (native 1M not exposed on free tier).
- **Multimodal: 95/100.** Full 4-channel input (text/image/video/audio), text output.
- **Coding: 72/100.** SWE 71, LiveCode 81.5, Vibe 42.2 — decent mid-frontier.
- **Cost efficiency: 100/100.** $0 free tier; even native pricing is cheap ($0.14/$0.28).
- **Overall Score: 77/100.** (77 + 70 + 70 + 95 + 72) / 5 = 76.8 → 77. Best free omni input + balanced agent/coding; use native 1M endpoint when context-bound. Re-derived 2026-10-01 after re-verification (was 76).

## Re-verification — 2026-10-01 (14 days after original)

Original research date 2026-09-17. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-17 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 75 | 77 | **+2** |
| Reasoning | 70 | 70 | — |
| Context window | 70 | 70 | — |
| Multimodal | 95 | 95 | — (confirmed) |
| Coding | 72 | 72 | — |
| Cost efficiency | 100 | 100 | — (not counted) |
| **Overall** | **76** | **77** | **+1** |

**Corrections to prior findings:**

- **Terminal-Bench 2.0 was wrong: 56.1 → 65.8%.** The 56.1 vendor figure has been superseded by first-party eval results published on the HF model card (`harborframework/terminal-bench-2.0`, 65.8). This is the single largest correction and it is what moved Tool use up.
- **Claw-Eval was mis-cited as a single "Text 65.8" vendor row.** First-party results split it into General **62.1** (161 tasks), Multi-turn **63.2** (38 tasks) and Multimodal **23.8** (101 tasks), all Pass³ N=3.
- **AA Intelligence Index moved 22 → 25** (v4.3.2, estimated, #27/117, class median 18). The "38" carried in the original as a v4.1.1 figure is a different index vintage; citing the two together was misleading and the original file already flagged the version issue.

**What held up unchanged:** the 4-channel modality claim (text/image/video/audio). This was the highest-risk claim in the original report, because Artificial Analysis lists MiMo-V2.5 as "text and image" only and Vals AI states "Video input not supported". Re-checked against the first-party HF card, which specifies a dedicated 261M-param audio encoder (24 layers) and a 729M-param ViT, plus `audio` and `video-understanding` model tags and an explicit "Modalities: Text, Image, Video, Audio". Xiaomi's launch post claims parity with Gemini 3 Pro on video. The AA and Vals entries reflect what their harnesses exercised, not a capability denial — the original report's caveat was the correct call, and the 95 stands (methodology: `+audio in = 90–100`). Also unchanged: TB2.1 63.7, τ² Telecom 90.6, LiveCodeBench 81.5, SciCode 43.1, Vibe Code Bench 42.2, AA Coding Index 56.8, SWE-bench Pro 56.1, Zen free-tier cap at 200K/32K.

**Newly found 2026-10-01:**

- **The model is deprecated.** AA now carries the banner: "This model is deprecated. We only continue performance benchmarking for the default 10k input token workload. Results for other workloads are historical and no longer updated," and recommends `MiMo-V2.6-Pro` instead. Xiaomi's own site states the MiMo-V2 series was deprecated 2026-06-30.
- **AA Intelligence Index v4.3.2 composition changed**, so index values are not comparable to the 2026-09-17 vintage: in are AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, GDP.pdf; out are τ³-Banking, Terminal-Bench 2.1, GPQA Diamond.
- Measured throughput/latency: **44.8 tok/s** (#52/117) and **TTFT 9.37s** against a class median of 68.8 tok/s and 2.27s. Cost per Intelligence Index task is **not published** for this model (estimate-only entry).
- ResearchClawBench **16.91**, MM-ClawBench **23.8%**, Gert Labs **46.89%**; Vals ranks it #31/62 on Terminal-Bench 2.1 and #61/143 on LiveCodeBench.

**Net assessment:** the original report was directionally right and its weakest number was the one that moved. The one caveat worth carrying forward is lifecycle, not capability — this is now a deprecated model line, so it belongs in a buyer's shortlist only where the $0 Zen tier and the 4-channel input coverage still matter more than a supported release train.

### Re-verification addendum — 2026-10-01 (second pass, user-approved refresh)

- **Pricing drift check:** llm-stats now lists the native `mimo-v2.5` at **$0.168/M in, $0.003/M cached, $0.336/M out** — a slight uptick from the $0.14/$0.28 launch-window rates recorded on 2026-09-17. No score impact (Cost stays 100 — scored on the $0 Zen tier).
- **Zen free tier re-confirmed** via pi.dev model registry: `opencode/mimo-v2.5-free`, OpenAI-completions, text+image in, reasoning on, **200,000 context / 32,000 max tokens** — matches the 2026-09-17 card exactly.
- **Deprecation re-confirmed** from additional angles: BenchLM excludes MiMo-V2.5 from its public leaderboard pending non-generated coverage, and third-party trackers (evals.report) treat the V2.5 line as historical, pointing at MiMo-V2.6 — consistent with the 2026-06-30 end-of-life already noted above. Xiaomi's own `mimo.xiaomi.com/mimo-v2-5` launch page (2026-04-22, 1M context, native audio+visual) remains the canonical first-party anchor for the modality claims.
- **Scores unchanged:** Tool 77 / Reasoning 70 / Context 70 / Multimodal 95 / Coding 72 / Cost 100 / **Overall 77** all hold — no new verified evidence contradicts the first-pass 2026-10-01 re-derivation.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-10-01 (re-verified; original research 2026-09-17)
- Method: public web research (Xiaomi launch/open-source pages, HF model card, models.dev, Artificial Analysis, BenchmarkList, evals.report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.