# Muse Spark 1.3 — findings by MiniMax M3.1 Flash

- Source: Meta (`meta/muse-spark-1.3`, also `muse-spark-1.3-contributor`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary frontier agentic/coding model, released 2026-09-02 as the third Muse Spark generation (after Muse Spark 1.1 in July 2026 and 1.2 in August 2026). Tuned for long-horizon agentic workflows, competitive coding and native multimodal perception. `Contributor`/`Free` and `Max` are **tiers of the same weights** — only price and whether Meta may train on your prompts differ. The open-weights sibling **Muse Spark Open** (816B total / 42B active) is a *different* checkpoint (1.2-era weights + safety post-training, released 2026-10-15), not a 1.3 release.
- **Provider / access:** Meta Model API (OpenAI-compatible, `dev.meta.ai`); OpenRouter `meta/muse-spark-1.3` (chat completions); OpenCode Zen `opencode/muse-spark-1.3` (`https://opencode.ai/inference/openai/v1/responses`, Responses API).
- **Release / knowledge:** 2026-09-02 (`research.meta.ai/blog/introducing-muse-spark-1-3`; BenchLM lineage "Sep 2, 2026"). Knowledge cutoff: **no verified public value found** (Meta docs mention a cutoff per model but publish none for Muse Spark).
- **IDs:** `meta/muse-spark-1.3` (Standard, $1.25/$4.25), `meta/muse-spark-1.3-contributor` (discounted, training-data consent), OpenRouter canonical slug `meta/muse-spark-1.3-20260902`, Meta API model id `muse-spark-1.3`, Zen `opencode/muse-spark-1.3`. No Zen Free ID is listed for 1.3 on the current Zen model list (verified 2026-10-19) — only the paid $1.25/$4.25 route.
- **Context window:** 1,048,576 tokens (1M) total, 131,072 max output (Meta quickstart config: "Limits: context 1048576, output 131072"). OpenRouter lists 1,048,576 and `max_completion_tokens` 943,718 — the 131,072 Meta figure is the conservative one; no long-context price premium ("you pay the same rate whether your context window is mostly empty or almost full").
- **Modalities:** input text, image, video, PDF (document) and audio; output text only. Audio is explicitly caveated by Meta: "Audio input on Muse Spark 1.3 … is not fully supported, and response quality for requests that include audio may be degraded." Reasoning: yes (mandatory, `reasoning_effort` minimal→max; "max" is a reasoning-effort level, not a separate model or price tier, and is unavailable on the Contributor route). Tool calls: yes (parallel/streamed tool-call args, tool search, web search grounding at $2.50/1,000 queries). JSON mode: tool arguments streamed as JSON.
- **Pricing (as of 2026-10-19, per 1M tokens):** Standard `muse-spark-1.3` — input $1.25, cached input $0.15, output $4.25 ("Not used to improve our products"). Contributor `muse-spark-1.3-contributor` — input $0.10, cached input $0.002, output $0.20 ("Used to improve our products"; requires 18+, no confidential/personal data, ZDR teams excluded, restricted territories). OpenCode Zen charges the Standard price ($1.25/$4.25/$0.15). Blended 7:2:1 rate $0.78/M.
- **Architecture:** proprietary, closed weights — "Meta has not disclosed the model size or parameter count" (Artificial Analysis FAQ). The published open-weights sibling Muse Spark Open is a Mixture-of-Experts Transformer, 816B total / 42B active, 62 layers, 256 experts (8 active), 1.8B perception encoder, 1M context, "Muse Model License" — do **not** transfer those numbers to 1.3.

### Raw benchmarks found

> Vendor table = Meta's own launch scorecard (`dev.meta.ai/models/muse-spark`, columns: Muse Spark 1.3 max / Muse Spark 1.2 xhigh / GPT 5.6 Sol max / Opus 5 max). Independent rows are labelled with the tracker. Conflicting values are listed side by side and discussed below.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (vendor table, Meta) / **84.27%** (Artificial Analysis, "Muse Spark 1.3 (Max)") / **72.3%** (Vals AI independent run, via BenchLM — "Terminal-Bench 2.1, Vals AI run", marked *Verified*) / 88.8% for Muse Spark 1.2 on Meta's own table
- Terminal-Bench 4.0: **33.33%** (AA, 1.3 Max, mini-swe-agent) / **16.67%** (AA, 1.3 Xhigh) / **14.55% ± 2.9%** (official tbench.ai board, Muse Code + Muse Spark 1.3 effort xhigh, rank 32 of 330) / 31.82% (AA Coding Agents, Muse Code + 1.3 max)
- Tau3-Banking: **50.52%** (AA, τ³-Banking) / 47.22% (AA, 1.3 Xhigh); Tau2-Bench: **not measured** (AA `tau2: null`)
- GDPval-AA: **1680.99 Elo** (AA, GDPval-AA v2.1) / **1754** (vendor table) / 1586.63 (AA for the 1.3 Xhigh/adjacent route); AA-Briefcase v1.1 Elo: **1581.34** (AA, 1.3 Max; 1485.51 for Xhigh)
- AutomationBench: **49.6%** (vendor table) / **57.85%** (AA, AutomationBench-AA partial score) / 49.4% (BenchLM transcription of the same Meta scorecard — minor transcription conflict)
- JobBench (professional tool use): **64.9%** (vendor table) / 61.6% for 1.2
- OSWorld 2.0 (agentic computer use): **66.9% partial / 32.0% binary** (vendor table); ApprenticeBench (end-to-end computer use, NeoCognition): **19%**; CWE-bench v1: **55.0%**; MazeBench (3D visual-spatial, ASCII mode): **0%**
- DeepSearchQA (agentic browsing): **90.3%** (vendor table) / 89.4% (BenchLM transcription)
- Gray Swan Indirect Prompt Injection (15 attempts): **15.9%** (BenchLM, evidence "Google: Gemini 4 Argon launch chart")
- ITBench-AA (SRE): **33.24%** (AA); GDP.pdf all-pass: **26.6%** (AA); MLCR-AA: **43.33%** (AA); Harvey LAB-AA v1.1: **8.89%** (AA); AA-Omniscience index **25**, accuracy **43.58%**, hallucination rate **32.94%** (AA); AA-Analyst: **37.5%** (AA); EnterpriseOps-Gym-AA: not published for 1.3 Max
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found** (SWE Atlas Codebase QnA: **59.41%** AA Coding Agents / **59.4%** vendor table — this is the only atlas-style number published)

Reasoning / knowledge:

- GPQA Diamond: **93.54%** (AA, 1.3 Max) / 94.14% (AA, 1.3 Xhigh); AA `gpqa` for the adjacent route 87.17%
- HLE: **48.70%** (AA, 1.3 Max) / 47.45% (AA, 1.3 Xhigh); HLE-Diamond: not measured for 1.3 (61.0% with tools is the **Muse Spark Open** card number, a different checkpoint)
- LCR / MLCR: AA-LCR v1.1 **83.0%** (AA, 10k–100k tokens) / 88.33% (1.3 Xhigh route); MLCR-AA **43.33%**
- CritPt: **24.86%** (AA, 1.3 Max) / 26.0% (Xhigh)
- FrontierMath v2: Tiers 1–3 **74.035%**, Tier 4 **46.341%** (Epoch AI FrontierMath v2 leaderboard, via BenchLM, *Benchmark exact*)
- Artificial Analysis Intelligence Index: **48** (rank **#24 / 217**; AA page title "Muse Spark 1.3 (max)", released September 2026) / 45.07 for the 1.3 Xhigh variant; 38.87 for Muse Spark Open (Xhigh). At release AA ranked 1.3 Max #3; the current #24 reflects the v4.3.2 re-baselining of the index.
- Omniscience Accuracy / Hallucination Rate: **43.58% / 32.94%** (AA)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (no independent SWE-bench row for 1.3; swebench.com has no Muse Spark 1.3 entry)
- DeepSWE: **75.4%** (vendor table) / **71.68%** (AA Coding Agents, Muse Code + 1.3 max) / 73.16% (xhigh)
- SWE-Atlas Codebase QnA: **59.4%** (vendor table) / 59.41% (AA Coding Agents)
- SciCode: **58.80%** (AA, 1.3 Max) / 59.72% (xhigh)
- LiveCodeBench: **no verified public score found** (AA `livecodebench: null`; LiveCodeBench board has no entry)
- FrontierSWE v2: **25.8%** (BenchLM, *Proximal* — FrontierSWE v2 leaderboard)
- FrontierCode 1.1: **40.65%** (AA)
- CursorBench 4.0: **41.6%** (BenchLM, *Benchmark exact* — Cursor evals); Bug Hunt Bench: **32.2 fixes** (BenchLM, *Benchmark exact*); SWE-2 best-verified reference on BenchLM is 92.8% TB2.1, i.e. 1.3 sits 4 points behind the leader
- Terminal-Bench-Science 0.1: **10.95%** (AA, 1.3 Max)
- Vibe Code Bench: **no verified public score found**
- Coding Index / other composite: AA Intelligence Index 48 (see above)

Long context:

- MRCR v2 256K–512K: **98.5%** (vendor table; BenchLM row "MRCR v2 256K-512K, OpenAI MRCR v2 8-needle 256K-512K" = 98.5%, 1.5 behind GPT-6 Astra's 100.0%)
- MRCR v2 512K–1M: **98.1%** (vendor table; BenchLM marks 98.1% as the best verified value in that band)
- AA-LCR v1.1 **83.0%** (10k–100k only) — the only independent long-context number; no independent MRCR/RULER/needle-in-haystack replication for 1.3, and no GraphWalks result found
- Muse Spark Open (different checkpoint) multimodal evals, for reference only: ZeroBench 50.0, BabyVision 80.2, SimpleVQA 73.6, WorldVQA 49.4, IntPhys2 68.3, VideoMMEv2 61.5

Performance / cost profile (Artificial Analysis, 1.3 Max):

- Output speed **127.9 t/s** (rank #42/185, Meta's API) / 142.6 t/s for Muse Spark Open; TTFT 53.35s; median time-to-first-answer-token 56.2s; 500-token end-to-end 72.9s (53.3s input + 15.6s thinking + 3.9s answer)
- Cost per Intelligence Index task **$1.60** (#77/114); $2,000.35 to run the whole index; verbosity 170M output tokens (60,200 tokens/task: 34,126 reasoning + 26,074 answer), 476.5s per task
- Blended price 7:2:1 = $0.78/M; cache-hit discount 88%

### Normalized scores (1–100)

> Derived from the raw numbers above using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule: cost excluded). Each dimension cites the evidence that sets it and the evidence that caps it.

- **Tool use: 89/100.** Frontier-tier agent numbers — Terminal-Bench 2.1 88.8% (Meta) / 84.27% (AA), τ³-Banking 50.52%, GDPval-AA 1680.99–1754 Elo, AutomationBench 49.6–57.9%, JobBench 64.9%, OSWorld 2.0 66.9% partial — meet the rubric's frontier anchors (TB2.1 ~88%+, Tau3 ~50%+, GDPval ~1750+). Capped below 90 by the independent Vals AI Terminal-Bench 2.1 run at 72.3%, the official Terminal-Bench 4.0 board at 14.55%, Computer-Use failures (MazeBench 0%, ApprenticeBench 19%) and no published Claw-Eval / Toolathon / MCP-Atlas / Tau2 numbers.
- **Reasoning: 91/100.** GPQA Diamond 93.54%, HLE 48.70%, MRCR 98.5% / 98.1% at 256K–512K and 512K–1M, AA-LCR 83.0%, FrontierMath v2 74.0%/46.3% — the rubric's frontier anchors (GPQA 90%+, HLE 40%+, MRCR 95%+ at 1M) are met. Capped by an Artificial Analysis Intelligence Index of only 48 (rubric anchor for 90–100 is Index 60+), CritPt 24.86% and Omniscience accuracy 43.58% / hallucination 32.94%.
- **Context window: 98/100.** 1,048,576-token window with 131,072 max output (Meta quickstart), and provider MRCR ≥98.1% at the 512K–1M band — the rubric's top tier (≥1M, 100 if ≥98% retrieval at 512K+). Held one point below 100 because the long-context evidence is provider-exact only (no independent MRCR replication; AA-LCR is 83.0% and only up to 100k tokens) and the max-output figure is inconsistent between Meta (131,072) and OpenRouter (943,718).
- **Multimodal: 88/100.** Native text + image + video + document (PDF) input with text output, plus partially supported audio input — the rubric's "+video/PDF in = 75–90" band, promoted above 80 by Meta's native perception encoder and AA's MMMU-Pro 76.36% (xhigh route). Not 90+ because audio input is explicitly degraded ("not fully supported … response quality may be degraded"), AA lists input as text/image/video only, and every published multimodal visual-evals number (ZeroBench 50.0, VideoMMEv2 61.5, …) belongs to the open Muse Spark Open checkpoint, not to 1.3.
- **Coding: 86/100.** DeepSWE 75.4% (Meta) / 71.68% (AA), SWE-Atlas 59.4%, SciCode 58.80%, Terminal-Bench 2.1 88.8% — rubric frontier anchors (DeepSWE 74%+, TB2.1 85%+, SciCode 55%+) are met on vendor numbers. Capped by the weak independent measurements: Vals AI Terminal-Bench 2.1 72.3%, Terminal-Bench 4.0 14.55% (official board) vs 33.33% (AA), FrontierSWE v2 25.8%, FrontierCode 40.65%, CursorBench 4.0 41.6%, and no SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench at all.
- **Cost efficiency: 88/100.** Scored on the route this dataset evaluates — OpenCode Zen `opencode/muse-spark-1.3` at $1.25 in / $4.25 out per 1M (cached $0.15, 88% discount; blended 7:2:1 $0.78) — the rubric's "~$1.25/$4.25 = ~88". Meta's discounted Contributor route ($0.10 / $0.20) would score ~97–98 but is a different data-consent mode and has no Zen Free ID (the current Zen free list carries no Muse Spark 1.3 entry, verified 2026-10-19); the free-tier caveat of time-limited promotion plus training-data consent applies to Contributor, so it is not credited here.
- **Overall Score: 90.4/100.** (89 + 91 + 98 + 88 + 86) / 5 = 90.4 — best-fit: a frontier-tier long-horizon agentic/coding model at 1M context with native video/document perception, priced for the paid tier; pick it over cheaper models for multi-hour agentic work, but verify Terminal-Bench in your own harness first (vendor 88.8% vs 72.3% independently measured).

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — three-way spread (88.8 / 84.27 / 72.3).** Meta's launch card reports 88.8%; Artificial Analysis measures 84.27%; Vals AI's independent run (published on BenchLM, marked *Verified*) reports 72.3%, with GPT-6 Astra at 87.3% as the best verified value. Resolution: the vendor figure is used in the raw table with the independent run listed beside it; the Reasoning/Coding scores are anchored on AA's numbers and capped by the independent run, because a 16-point gap between a vendor harness and a third-party harness is a harness artifact, not a rounding error.
2. **Terminal-Bench 4.0 — 14.55% vs 33.33%.** The official tbench.ai board shows Muse Spark 1.3 (via the Muse Code agent, effort xhigh) at 14.55% ± 2.9%, while AA reports 33.33% for the same model at "max" effort and 16.67% at xhigh. Different agent harness and effort level; the low official number is the reason Coding is not scored in the 90s.
3. **DeepSWE — 75.4 vs 71.68.** Meta's card 75.4% (corroborated by HN: "DeepSWE scores 75.4 - that's the best score so far"); AA's Muse Code + 1.3 (max) run 71.68%. Both listed; the AA figure is treated as the more conservative anchor.
4. **GDPval-AA — 1754 vs 1680.99.** Meta's card 1754 (the rubric's frontier anchor); AA measures 1680.99 Elo. The 73-point gap is inside a normal Elo-vs-Elo harness spread; both listed.
5. **AutomationBench / DeepSearchQA transcription (49.6 / 90.3 vs 49.4 / 89.4).** Meta's own HTML grid gives 49.6 and 90.3 for Muse Spark 1.3; BenchLM's ledger of the same scorecard records 49.4 and 89.4. Vendor page values are used; the discrepancy is flagged as a transcription difference, not a measurement difference.
6. **Verbosity contradiction.** Meta's blog claims 1.3 uses "~20% fewer tool calls and ~25% fewer tokens" than 1.2, but AA measures 1.3 (max) at 60,200 output tokens/task versus 47,874 for 1.2 (i.e. *more*), and a Hacker News commenter reports "3X token use vs. 1.2". The token-efficiency claim is therefore not treated as evidence.
7. **Ranking drift.** At release AA had 1.3 (max) at #3 of the Intelligence Index; the current page shows 48 and #24/217 because the index was re-baselined to v4.3.2. Both facts recorded so the score is not read as a release-week claim.
8. **Community quality doubts.** The HN launch thread (691 points, 454 comments) contains "anybody who's used these models knows that their real-world software engineering performance has no relation to the ranking on deepSWE" and "Used Muse Spark 1.2 and was not impressed at all. Fast and cheap but even GPT 5.6 Terra felt much more capable", while Simon Willison (2026-10-13) wrote "The 1.3 one is definitely better - better bicycle frame, better wing, better pelican hat." These are anecdotal and are not scored, but they are the reason Coding is held below the vendor-implied 90+.

### Notes on identity (why this is one model)

- `muse-spark-1.3`, `muse-spark-1.3-contributor` and any "Muse Spark 1.3 Max" name resolve to the same weights: Contributor is a discounted mode with training-data consent, Max is `reasoning_effort: "max"` on the Standard tier. Meta ships no separate Max or Contributor model.
- `Muse Spark Open` (816B/42B, open weights, 2026-10-15) is a **different** checkpoint — "derived from the Muse Spark model we released in August" with extra safety post-training — so its benchmark card (Terminal-Bench 2.1 76.4, DeepSWE 60, GPQA 89.0, HLE 61.0 w/tools, AA Index 39) is lineage data, not 1.3 data, and is not merged into these scores.
- 1.1 (July 2026) and 1.2 (August 2026) are earlier checkpoints (AA Index 33.7 and 39.6 respectively).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Meta first-party model page, pricing table, quickstart/docs, research blog and Hugging Face model card; independent trackers Artificial Analysis (model page + Coding Agents), BenchLM (evidence ledger incl. Vals AI, Epoch AI, Cursor, NeoCognition, CWE-bench, FrontierSWE, Bug Hunt runs), the official Terminal-Bench board, OpenRouter model catalog, OpenCode Zen model/pricing list, and Hacker News / Simon Willison commentary; conflicts between vendor and independent numbers are listed explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.
