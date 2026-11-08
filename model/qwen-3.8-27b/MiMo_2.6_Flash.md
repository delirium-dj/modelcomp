# Qwen3.8-27B — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud / Qwen Team (`Qwen/Qwen3.8-27B`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 85). Fresh sources this pass: BenchLM model page (updated
> 2026-11-07, 75 rows incl. AA + Vals independent runs) and Artificial Analysis
> model page (fetched 2026-11-08). Changes: Tool use 85→88 (AA Tau3-Banking 48.0,
> GDPval-AA 1427, AA TB2.1 79.8 all previously "no verified public score found"),
> Reasoning 77→81 (AA-GPQA 90.5 clears the 90 ref, AA-LCR 82.0 and AA Index 20.1
> fill unknowns), Cost 95→92 (first-party API price now published: $0.50/$3.00),
> Overall 85→86; held Context 90, Multimodal 85, Coding 87.

## Model card

- **Name:** Qwen3.8-27B — the compact, deployment-friendly dense member of the Qwen3.8 open-model generation (released 2026-08-14; family blog August 2026; distinct from Qwen3.8-Max / Qwen3.8-Plus hosted entries).
- **Short description:** A dense 27B **native vision-language** model (image + video understanding, hour-scale video with config) built on Qwen3.5's architecture for coding, professional work, and long-horizon agentic tasks — with surprising punch: it beats Claude Opus 4.6 Max on SWE-bench Pro, OSWorld-Verified, IFBench, AndroidWorld, and LiveCodeBench v6 in Qwen's own harness-controlled runs, and independent AA/Vals runs now confirm the profile (Vals SWE-bench 86.0, AA-GPQA 90.5, AA Tau3-Banking 48.0).
- **Provider / access:** Hugging Face weights (Apache-2.0; 6.76M downloads/month, 1,347 community quantizations); **Alibaba/Qwen first-party API live** (AA measures the xhigh reasoning tier at $0.50/$3.00, 13 API providers listed by AA); HF Inference Providers (Novita +1); self-host via Transformers, vLLM, SGLang, TokenSpeed, llama.cpp, Ollama. No Free ID on OpenCode Zen (`noFreeId: true`).
- **Release / knowledge:** released **2026-08-14** (Qwen3.8 generation; HF collection updated 2026-08-13); knowledge cutoff not disclosed → not scored.
- **IDs:** `Qwen/Qwen3.8-27B` (HF / model IDs); hosted ID `qwen3.8-27b` on Qwen Cloud/Alibaba API (AA slug `qwen3-8-27b`).
- **Context window:** **262,144 tokens native** (AA and BenchLM both list 256K/262K); extensible to **1,000,000** with static YaRN (`factor: 4.0`, `original_max_position_embeddings: 262144`, documented for vLLM/SGLang/TokenSpeed with caveats — static scaling can hurt shorter-text performance). Recommended outputs: reasoning up to 262,144 tokens, final response up to 131,072 within the 1M setup.
- **Modalities:** **text, image, video in** (AA confirms); text out; reasoning **yes — thinking on by default**, disable per request; `reasoning_effort` = **`xhigh` (default)** / `medium` / `low`; `preserve_thinking` on by default; tool calls via standard harnesses (Chat Completions OpenAI-compatible).
- **Pricing (as of 2026-11-08):** **$0.50 in / $3.00 out** per 1M on Alibaba's API (xhigh tier, AA-fetched; 80% cache discount; $3.53 per Intelligence-Index task — "at the higher end" vs class median $0.12/$0.30); open weights Apache-2.0 → self-host = hardware cost only; third-party hosted pricing varies (Novita etc.). Previous pass had no list price to score against.
- **Architecture:** dense **27B** (28B safetensors BF16), 64 layers, hidden 5,120; hybrid layout `16 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN))` — linear-attention (Gated DeltaNet) + gated full attention; MTP (multi-token prediction) trained; vision encoder native.

### Raw benchmarks found

> Fresh-pass rows: BenchLM model page (updated 2026-11-07, sources = Qwen HF card,
> Artificial Analysis re-runs, Vals AI re-runs, leaderboards) and the AA model page
> (fetched 2026-11-08). Vendor rows unchanged since the 2026-08-14 card. Harness
> notes for card rows: Claude Code harness, temp 1.0 / top_p 0.95 / 256K context;
> in-house rows (QwenSWEBench, CoWorkBench, JobBench, RecreationBench) flagged
> vendor-internal.

Agent / tool use:

- **AA Tau3-Banking: 48.0%** (AA independent — new; previous pass: "no verified public score found") — just under the ~50% frontier ref
- **GDPval-AA: 1427 Elo** (AA, new; normalized 45.9) — above the 900–1200 mid band, under the 1750+ frontier ref; **AA Agentic Index 46.5**, AA-Briefcase **1391**, AA AutomationBench 48.2, AA EnterpriseOps-Gym 44.2
- Terminal-Bench 2.1: **73.0%** vendor / **79.8%** (AA independent, new) / **58.4%** (Vals, new) — all under the 85–88 ref
- OSWorld-Verified (computer use): **84.3%** — bold-best in Qwen's table, above Opus 4.6 Max's 72.7
- WebArena-Verified: **64.8%**; AndroidWorld: **81.9%** (Opus 62.0)
- CoWorkBench (in-house): **70.7%**; JobBench (in-house): **33.4%**; RecreationBench (in-house): 47.1%
- Agents' Last Exam: **20.4%** Pass@1 / 42.9 score; ClawEval-MM Pass@3 57.4 / average 56.9; Vision2Web 62.9%
- MCP-Atlas / Toolathlon: no verified public score found; AA Terminal-Bench 4.0: 5.6% (new, hard-next-gen agentic row)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** vendor / **90.5%** (AA independent, new — **clears the 90+ ref**) / 88.9 (Vals, new)
- HLE: **30.8%** vendor (judged by GPT-4o) / **33.9%** (AA, new) — still under the 40% ref
- **AA Intelligence Index v5.0.1: 20.1** (AA, new — previous pass: "no verified public score found"; AA: #2/10 in class, "well above average" vs class median 8) — **far under the 60+ ref**
- **AA-LCR: 82.0%** (AA, new — previous pass: "LCR: no verified public score found"); MLCR-AA: 22.8
- CritPt: **5.4%** (AA, new); AA-Omniscience: net −6.4 (accuracy 17.3%, hallucination rate 28.6%)
- IFBench: **79.5%** — bold-best (beats Qwen3.7-Plus 79.1 and Opus 62.5); MMLU-Pro (Vals): 84.3
- BenchLM overall: **54.62 / #74 of 1016** (2026-11-07); no ARC-AGI / AIME row found

Coding (vendor harness-controlled unless noted):

- SWE-bench Pro: **61.7%** vendor — bold-best above Opus 4.6 Max's official 53.4; **SWE-bench (Vals): 86.0%** (independent, new)
- LiveCodeBench v6: **90.3%** vendor bold-best (Opus 4.6 Max 88.8); **LiveCodeBench (Vals): 84.0%** (independent, new)
- **AA Coding Index: 68.1%** (new — previous pass: "no AA Coding Index row") — just under the 70%+ frontier ref; **AA-SciCode: 46.6%** (new, under the 55% ref)
- QwenSWEBench (in-house, avg@3, 8h timeout): **79.0%** (Opus 63.8); NL2Repo-Bench: 42.3% (Opus 47.6)
- DeepSWE 1.1: **42.2%** — well under the 74% frontier ref; SWE-MM: 38.6%; VulcanBench v3: 82.6 (new); Bug Hunt Bench: 15.0 fixes (new)
- SWE-bench Verified / Vibe Code Bench: no verified public score found

Multimodal / vision:

- **AA-MMMU-Pro: 76.3%** (AA independent, new); ExtractBench 89.75 / ParseBench 69.03 (LlamaIndex snapshots, new)
- MathVision: 90.0 w/o chain inspection, **94.6 with CI**; BabyVision: 65.7 / **85.6 with CI**; CharXiv RQ: 83.7 / **90.2 with CI**
- OmniDocBench 1.5: **91.1**; RealWorldQA: **85.9**; ERQA (embodied): 65.5; Vision2Web: 62.9
- Hour-scale video understanding supported natively (up to 224K video tokens with recommended config)

Long context:

- **AA-LCR: 82.0%** (AA, new) — first long-context reading for this model; native 262,144 confirmed by AA/BenchLM; YaRN path to 1M documented but still unbenchmarked beyond AA-LCR → capacity documented, 1M retrieval unproven.

### Normalized scores (1–100)

- **Tool use: 88/100.** MOVED UP from 85: the three gaps that capped the previous pass are now filled by independent rows — AA Tau3-Banking **48.0** (frontier ref ~50), GDPval-AA **1427** (above the 900–1200 mid band) and AA Terminal-Bench 2.1 **79.8** — alongside the already-strong OSWorld-Verified 84.3, AndroidWorld 81.9 and vendor TB2.1 73.0; capped below 90 because every frontier anchor still misses (TB2.1 79.8 < 88, Tau3 48.0 < 50, GDPval 1427 < 1750) and AA Terminal-Bench 4.0 is only 5.6.
- **Reasoning: 81/100.** MOVED UP from 77: AA-GPQA Diamond **90.5** clears the 90+ frontier ref (vendor 89.2, Vals 88.9), and the two previously-missing anchors now exist — AA-LCR **82.0** (strong, above the <40 mid profile) and AA Intelligence Index **20.1** (mid-band floor, #2/10 in its open-weights class) — with AA-HLE 33.9 nudging the vendor 30.8; capped at 81 because HLE still misses 40 and the Index misses 60 by a wide margin, and CritPt 5.4 is weak.
- **Context window: 90/100.** HELD: 262,144 native (AA/BenchLM both list 256K/262K) = 256K tier; the documented YaRN path to 1M is a real architectural bonus but unbenchmarked (static-scaling caveat), now partially de-risked by AA-LCR 82.0 at the served window; no MRCR/RULER row for the 1M path.
- **Multimodal: 85/100.** HELD: text + image + video in (video band 75–90) with elite vision rows — MathVision 94.6, CharXiv 90.2, OmniDocBench 91.1, RealWorldQA 85.9, and now independent AA-MMMU-Pro 76.3 — held at 85 only because there's no audio, no generated-image/video output, and no long-video benchmark number.
- **Coding: 87/100.** HELD: independent rows now corroborate the vendor profile (Vals SWE-bench 86.0, Vals LCB 84.0, AA Coding Index 68.1 just under the 70 ref, VulcanBench 82.6) but the same caps persist — DeepSWE 42.2 (far under 74), AA-SciCode 46.6 (under 55), TB2.1 73–79.8 (under 85), no SWE-bench Verified / Vibe rows — so the mid-to-upper value stands.
- **Cost efficiency: 92/100.** MOVED DOWN from 95: a first-party price now exists to verify the API-side economics the previous pass could only assume — **$0.50/$3.00** per 1M (Alibaba API, xhigh tier) sits at the ~$0.60/$2.20 ≈ 92 anchor and is "at the higher end" for its class (AA median $0.12/$0.30; $3.53 per Index task); open-weights self-hosting at 27B dense keeps it far above the paid-frontier scores.
- **Overall Score: 86/100.** (88+81+90+85+87)/5 = 86.2 → 86 — the efficiency anomaly of the batch: a 27B that out-accounts Opus 4.6 Max on SWE-Pro and OSWorld and now shows near-frontier independent tool rows (Tau3 48.0, GDPval 1427) at self-host cost; HLE 33.9 and Index 20.1 keep the reasoning score honest.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07, Artificial Analysis model page fetched 2026-11-08, Vals AI leaderboard rows, Qwen HF model card); scores are normalized 1–100 interpretations, not official vendor scores; vendor-run vs independent (AA/Vals) rows labeled per line.
- Reference URLs:
  - [BenchLM — Qwen3.8-27B (updated 2026-11-07)](https://benchlm.ai/models/qwen3-8-27b)
  - [Artificial Analysis — Qwen3.8 27B (Xhigh)](https://artificialanalysis.ai/models/qwen3-8-27b)
  - [Hugging Face — Qwen/Qwen3.8-27B model card](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Vals AI — alibaba_qwen3.8-27b](https://www.vals.ai/models/alibaba_qwen3.8-27b)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen3.8-27B — findings by Mimo v2.6 Flash

- Source: Alibaba (Qwen)/`Qwen3.8-27B`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen's compact 27B dense, natively multimodal (text/image/video in) open-weights model released 2026-08-14 under Apache 2.0, aimed at self-hosted coding agents and office workflows; it outperforms the hosted Qwen3.7-Plus on Qwen's own tables. Distinct from `qwen3.8-max` (2.4T MoE, bespoke licence) and from `qwen-3.8-flash`.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-27b` (per folder `meta.json`, `noFreeId: true` — **no Zen Free ID**); open weights on Hugging Face `Qwen/Qwen3.8-27B` (+ `-FP8`) and ModelScope; served via vLLM/SGLang/llama.cpp and third-party hosts. OpenAI-compatible Chat Completions.
- **Release / knowledge:** 2026-08-14 (Hugging Face / GitHub / DataNorth); **Alibaba published no system card, training cutoff or safety eval** for this checkpoint.
- **IDs:** `Qwen/Qwen3.8-27B` (HF); `opencode/qwen-3.8-27b` on Zen.
- **Context window:** 262,144 native (GitHub/HF), extendable to 1,048,576 via YaRN; recommended 131,072-token cap on final responses for agentic workloads, 262K for reasoning tokens (AI/TLDR). YaRN is static and can reduce quality on short prompts.
- **Modalities:** text, image, video in; text out; thinking mode toggle (on by default) with multi-token-prediction speculative decoding; tool calls; JSON/structured output supported by the serving stack.
- **Pricing (as of 2026-09-25):** **no first-party metered API price published for the 27B at release** (Alibaba lists none, unlike Qwen3.8-Max at $2/$6 per 1M); Zen `meta.json` records "Open weights (Apache-2.0): self-hosting free, API provider pricing varies; no Free ID". Hosting cost is GPU rental: BF16 ≈ 51.8 GiB (≈68 GiB for full 262K on an 80GB card), FP8 ≈ 28.8 GiB.
- **Architecture:** 27.78B dense, 64 layers in a hybrid layout (48 Gated DeltaNet linear-attention blocks + 16 full-attention blocks) on the Qwen3.5 foundation, 5120 hidden, MTP head; **Apache 2.0** (licence file confirmed, not just card front matter).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.
> All rows below are from Alibaba's Qwen model card / GitHub release tables (Claude Code harness, temp 1.0, top_p 0.95, 256K context) unless another source is named; QwenSWEBench, CoWorkBench and JobBench are in-house and cannot be independently checked.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (Qwen model card; also listed on the Harbor/terminal-bench-2.1 leaderboard)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: text Claw-Eval no verified public score found; **ClawEval-MM (multimodal): Pass@3 57.4, Average 56.9** (Qwen card)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%** (Qwen card — computer/browser/mobile use)
- CoWorkBench (in-house): 70.7%; JobBench: 33.4%; RecreationBench: 47.1% (Qwen card)
- Agents' Last Exam: **Pass@1 20.4% / score 42.9** (Qwen card)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen card; listed on the idavidrein/gpqa Diamond leaderboard)
- HLE (no tools): **30.8%** (Qwen card)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- IFBench (instruction following): 79.5% (Qwen card)

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: **61.7%** (Qwen card, Claude Code harness on a corrected task set — not directly comparable to unmodified runs)
- LiveCodeBench v6: **90.3%** (Qwen card — its highest-ranked text number, ahead of Opus 4.6 Max's 88.8 on the same table)
- DeepSWE 1.1: **42.2%** (Qwen card; also listed on the datacurve/deep-swe leaderboard)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- QwenSWEBench (in-house): 79.0%; NL2Repo-Bench: 42.3% (Qwen card)

Long context / multimodal (measured):

- Long-context retrieval: no MRCR / RULER / GraphWalks reported for 262K or YaRN-1M — **no long-context retrieval reported**
- MathVision: 90.0 without CI / **94.6 with CI**; OmniDocBench 1.5: **91.1**; RealWorldQA: **85.9**; CharXiv RQ: 83.7 / 90.2 with CI; BabyVision: 65.7 / 85.6 with CI; SWE-MM: 38.6; Vision2Web: 62.9 (Qwen card)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic-surface evidence — TB 2.1 73.0, OSWorld-Verified 84.3, AndroidWorld 81.9, WebArena 64.8, ClawEval-MM 56.9 — all above the mid band (TB 2.1 45–60 → 50–70) but short of the frontier reference (TB 2.1 ~88+, plus no Tau3 or GDPval number at all), and Agents' Last Exam Pass@1 is only 20.4. That gap between 73 and ~88 is what caps it below 80.
- **Reasoning: 80/100.** GPQA Diamond 89.2 is a point off the 90+ frontier reference and HLE 30.8 sits well above the mid band; capped by no LCR, CritPt or Intelligence Index figure, an HLE short of the 40+ frontier reference, and Alibaba's unpublished cutoff/system card.
- **Context window: 74/100.** 262,144 native is in the 200K–500K tier (65–84, 200K = 70) and scores at the upper-middle of it; the 1M YaRN extension is documented but static-YaRN quality loss on short prompts plus zero published retrieval accuracy (MRCR/RULER) keep it out of the ≥1M 95–100 band.
- **Multimodal: 85/100.** Text + image + video in with text out lands in the +video/PDF band (75–90); backed by OSWorld 84.3, OmniDocBench 91.1, MathVision 94.6 (with CI), RealWorldQA 85.9 and native hour-scale video input. Not higher because output is text-only and no audio in is documented.
- **Coding: 84/100.** LiveCodeBench v6 90.3, SWE-bench Pro 61.7, DeepSWE 42.2, TB 2.1 73.0 — clearly past the mid band and competitive with bigger models on Qwen's table, but short of the frontier references (TB 2.1 85+, DeepSWE 74+) and missing SWE-bench Verified, SciCode and Vibe Code Bench entirely.
- **Cost efficiency: 90/100.** Apache 2.0 open weights with no metered first-party API price = effectively free to self-host (the realistic cost is an 80GB-class GPU for BF16 at 262K, or FP8 on 24–48GB consumer cards); held just below the 97–99 band because there is no verified $0.10/$0.20-class hosted rate for this checkpoint yet.
- **Overall Score: 80/100.** (78 + 80 + 74 + 85 + 84) / 5 = 80.2 → 80 — best-fit as a self-hostable, Apache-2.0 coding + computer-use agent with real multimodal reach; choose it when you need local/air-gapped deployment, and step up to a frontier closed model for Tau/GDPval-class tool reliability or hardest-tier reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Qwen/Qwen3.8-27B Hugging Face card and GitHub release repo, DataNorth and AI/TLDR write-ups, HokAI and AI Release Tracker summaries, Harbor/DeepSWE leaderboard listings); scores are normalized 1–100 interpretations, not official vendor scores. In-house Qwen benchmarks are labelled as such.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
