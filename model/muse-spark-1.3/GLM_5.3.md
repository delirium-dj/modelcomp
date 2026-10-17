# Muse Spark 1.3 Max — findings by GLM 5.3

- Source: Meta (`meta/muse-spark-1.3-max`)
- Date: 2026-10-17 (UTC) — third-pass re-research of the 2026-10-02 report (second pass 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** The max-reasoning-effort configuration of Meta's Muse Spark 1.3 — "max reasoning for challenging reasoning and agentic tasks" — the configuration Meta benchmarks against GPT 5.6 Sol (max) and Claude Opus 5 (max). Flag: variant/alias of the Muse Spark 1.3 entry (same weights as `muse-spark-1.3` and the Contributor Free tier); only the effort setting differs. Second-pass update: max reasoning is now generally available through Muse Code and the Meta Model API (it was still in limited partner preview at launch).
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`, OpenAI Responses SDK compatible) via Muse Code and the Meta Model API; OpenRouter. On OpenCode Zen as `opencode/muse-spark-1.3` (Responses API) — max effort is a request setting, not a separate ID.
- **Release / knowledge:** Muse Spark 1.3 released 2026-09-02 (Meta Research launch scorecard; The AI Rankings and AI on Mac both confirm the date). Knowledge cutoff not published.
- **IDs:** `muse-spark-1.3` (max reasoning effort); Zen `opencode/muse-spark-1.3`. No separate Free ID for this configuration.
- **Context window:** 1,048,576 input tokens / 131,072 output tokens (Meta Model API quickstart, verified 2026-10-09 via AI on Mac; the output split was previously undocumented).
- **Modalities:** text, image, and video in, text out ("native multimodal perception... video, images and documents"); reasoning (max, now GA); tool calls; computer use; search grounding (billed $2.50 per 1,000 searches); agent fan-out (official cookbooks).
- **Pricing (as of 2026-10-08, Meta first-party price schedule):** `muse-spark-1.3` $1.25 / $4.25 per MTok in/out, cached read $0.15 — "not used for model training"; `muse-spark-1.3-contributor` $0.10/$0.20, cached $0.002 — prompts and completions may train or improve Meta models (data-use tradeoff, not a volume discount). Standard rate limits 3,000 RPM / 4M TPM per team; Contributor 100 RPM / 3M TPM. AI on Mac's worked example: a 10M-in/2M-out intensive run costs $21.00 standard vs $1.40 contributor (15x at that mix).
- **Architecture:** proprietary, size undisclosed; trained for long-horizon agentic workflows with ~20% fewer tool calls and ~25% fewer tokens claimed over 1.2 (vendor-side comparison, not independently verified). Open weights announced but undated/unlicensed as of 2026-10-09.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (official launch scorecard, max effort; third-party: AA 84.3% #30, Vals 79.0% #11 at max — up from 72.3% #24 at xhigh; public tbench.ai board lists 14.6% #77 for an xhigh run on a stricter harness — flagged, not double-counted)
- Terminal-Bench 4.0: **33.3%** #35 (AA, max; 16.7% #63 at xhigh); Vals max **24.8%** #15 — the newer, harder terminal bench remains a weak spot
- GDPval-AA v2: **1754 Elo** (official, now listed on Meta's own model card; still not independently replicated on the AA board at AI on Mac's 2026-10-09 recheck; same scorecard shows Claude Opus 5 max at 1824 — higher); AA normalized **59.0-59.2%** #13 (revised from 58.6% in the launch-era listing)
- JobBench: **64.9%** (official; GPT-5.6 Sol max 45.4%, Opus 5 max 65.7%)
- OSWorld 2.0: **66.9%** partial / **32.0%** binary (official)
- DeepSearchQA: **90.3 F1** (current Meta model page — revised from 89.4 at launch; GPT-5.6 Sol 93.1, Opus 5 90.4)
- AutomationBench: **49.6%** (current Meta page — revised from 49.4; AA: **57.9%** #26)
- Agentic IF Index (internal): **57.8** (official; GPT-5.6 Sol 60.5 higher)
- Tau3 Banking: **50.5%** #3 (AA leaderboard — top-5 finish)
- AA Agentic Index: **55.7%**; AA Briefcase Elo: **1581-1583** #12 (AA via BenchLM/BenchLeader)
- Vals professional agents (max): Legal Research **55.3% #1**, Finance Agent v2 **60.0% #4**, Tax Agent **72.4% #6**, Harvey HLAB **23.8% #2**, CyberBench **72.7% #13**, Excel Modeling **67.4% #15**
- Scale PRBench (effort not stated): Finance **59.5% #1**, Legal **61.6% #1**
- CWE-bench v1: **55.0%** (Collinear); ApprenticeBench: **19%** (NeoCognition); AA ITBench: **33.2%** #29; CUA-bench: **5.8%** #6 (Vals); APEX-Agents: **57.8%** #16 (Mercor); GDP.pdf: **26.6%** #9; Harvey LAB: **8.9%** #2
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** #7 at xhigh / **93.5%** #14 at max (AA — above the 90% frontier bar either way)
- HLE: **48.7%** #29 (max; 47.5% #35 xhigh) (AA — above the 40% frontier bar, rank mid-field)
- AA Intelligence Index v4.3.2: **48.1** #23 (max; 45.1 #34 xhigh) — the launch-era AA article reported 61-62 on the then-current index version; the gap is an index-version rescale, not a regression (flagged, both retained)
- CritPt: **24.9%** #42 (max; 26.0% #37 xhigh) — critique remains the weak spot
- LiveBench (max): global **81.6% #7**, Reasoning **89.7% #14**, Mathematics **96.0% #12**, Data Analysis **79.6% #11**, Language **82.8% #23**, Instruction Following **78.0% #4**; Stack Futures measured it #4 on LiveBench at ~$0.22/task
- LMArena (max): Text **1494 #9**, Hard Prompts **1517 #11**, Maths **1502 #14**, Instruction Following **1483 #19**, Document **1468 #19**, Multi-turn **1487 #24**, Creative Writing **1456 #30**
- FrontierMath: Tiers 1-3 **74.0%** #21 (max; 74.4% #20 xhigh), Tier 4 **46.3%** #25; OTIS Mock AIME **99.2%** #14; ProofBench **55.0%** #24
- MysteryMechanism: **36.0%** #9 (Vals); Chess Puzzles **38.0%** #32; BTF-3 **14.1%** #5; LMCA **53.9%** #35; DTBench **96.5%** #17 (Epoch hub, effort not stated)
- MRCR v2: **98.5%** at 256K-512K, **98.1%** at 512K-1M (official); AA-LCR: **83.0%** #24; MLCR-AA: **43.3%** #12
- Omniscience: accuracy **43.6%** #96, non-hallucination **67.1%** #52, index **25** #50 (AA — good honesty, middling knowledge breadth)
- Epoch Capabilities Index: **156.8** #19; Vals Index: **58.2** #9 (max)
- Composite trackers: BenchLeader Index **67.7 ±4.2, #19 of 760** (max; xhigh 64.8 #45), last measured 2026-10-09, trending up (58→67) as results settle; category profile: Reasoning 78, Agents & tools 70, Knowledge 73, Maths 64, Human preference 69, Multimodal 66, Long context 67, Coding 65, Composite 84. BenchLM composite: not computed (38 of 625 rows, unranked)
- Gray Swan IPI (15 attempts): **15.9%** (listed in Google's Gemini 4 Argon launch chart via BenchLM)

Coding:

- DeepSWE v1.1: **75.4%** (official Meta run — still not independently replicated: Datacurve's public board showed no 1.3 entry at AI on Mac's 2026-10-09 recheck, with Gemini 3.8 Flash high ~74%, Claude Opus 5 max ~74%, GPT-5.6 Sol max ~73% for context; developer.tenten.co and mindstudio.ai both flag the reproducibility gap)
- SWE-Atlas Codebase QnA: **59.4%** (official; Scale's public leaderboard not yet synchronized; Scale's own analysis warns native-vs-generic scaffolds can swing scores 1.5-2x)
- Terminal-Bench 2.1: **88.8%** official (see Agent section for third-party variance)
- LiveBench Coding: **81.1%** #16; LiveBench Agentic Coding: **64.1%** #8 (max)
- LMArena Coding: **1538 #12**; LMArena WebDev: **1657 #12** (max)
- Vibe Code Bench v1.1: **85.9%** #11 (Vals, max); VCB 1-100: **20.5%** #6
- IOI: **56.6%** #17 (Vals, max; 43.9% #27 xhigh); Code Migration: **47.4%** #12 (Vals, max)
- SciCode: **58.8%** #16 (AA, max) / **59.7%** #11 (xhigh, SciCode board)
- CursorBench 4.0: **41.6%** #22 (max; scales from 24.3% at minimal effort — effort-sensitive)
- AA Coding Index: **75.8%**; Bug Hunt Bench: **32.2 fixes**; Design Arena Website: **1358** (OpenRouter via BenchLM — drifted from 1363/1365); FrontierSWE v2: **25.8%** (Proximal leaderboard — new this pass, a weak hard-SWE data point vs Opus 5.5's 62.3%); MazeBench (ASCII, no tools): **0%** (new this pass); AA-AnalystAgent: **37.5%** (AA — new this pass); FrontierMath v2 exact: T1-3 **74.035%**, T4 **46.341%** (Epoch)
- SWE-bench Verified / LiveCodeBench: **no verified public score found** (Stack Futures confirms no independent SWE-bench Verified or tau-bench evaluation as of its 2026-10 writing)

Long context:

- MRCR v2 512K-1M: **98.1%** (official) — ≥98% retrieval at 512K+, meeting the full-credit bar; AA-LCR 83.0% #24 is the only independent long-context number; 131,072-token output cap now documented (Meta API quickstart)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 88.8% (official, max) touches the 88%+ frontier bar with Vals max 79.0% #11 and AA 84.3% corroborating, GDPval 1754 clears its ~1750 reference (though Opus 5 max 1824 is higher on the same card), and the new professional-agent cluster is elite (Legal Research #1, PRBench Finance/Legal #1, Finance Agent #4, Tax Agent #6, τ³-Banking #3). Capped by Terminal-Bench 4.0 weakness (16.7-33.3%), CUA-bench 5.8%, ApprenticeBench 19%, ITBench 33.2%, and the GDPval result still lacking independent replication.
- **Reasoning: 90/100.** GPQA 94.1% (xhigh) clears the 90% frontier bar, HLE 48.7% clears the 40% bar, LiveBench global 81.6% #7 / Reasoning 89.7% #14, LMArena Hard Prompts 1517 #11, FrontierMath T1-3 74%, MysteryMechanism #9, and 98%+ MRCR retrieval. Capped by CritPt 24.9% #42, HLE's mid-field rank (#29), and the current AA Intelligence Index 48.1 #23 — frontier-adjacent, not top-3.
- **Context window: 100/100.** 1M input (1,048,576 documented) with official MRCR v2 at 98.5% (256K-512K) and 98.1% (512K-1M) — meets the methodology's "100 if ≥98% retrieval at 512K+" bar exactly; the newly documented 131K output split does not change the input-window tier.
- **Multimodal: 85/100.** Native text, image, video, and document input with visual reasoning through a real execution environment (official); no audio input or non-text output verified for 1.3. LMArena Vision Elo 1309 #13 supports the top-of-band position; MMMU-Pro 82.0% #34 (xhigh, AA) is mid-field and caps any move higher.
- **Coding: 88/100.** Lowered from 90 this pass: the newly published FrontierSWE v2 **25.8%** (Proximal independent board) is materially below peer tier (Opus 5.5 62.3% #2, Sonnet 5.5 61.9%) and joins LiveBench Coding #16, IOI #17, CursorBench 4.0 #22 and MazeBench 0% as independent negatives; DeepSWE 75.4% (still unreplicated independently), TB2.1 88.8%, LiveBench Agentic Coding 64.1% #8, LMArena WebDev 1657 #12, Vibe Code 85.9% #11, SciCode 58.8% remain the strengths. Net: frontier-adjacent headline coding with a growing list of independent hard-bench misses.
- **Cost efficiency: 90/100.** $1.25/$4.25 per MTok (cached $0.15) with the documented $0.55-0.69/task and ~$0.22/task LiveBench operating costs remains the value leader at this capability level; max effort burns more reasoning tokens (BenchLeader: $1.60 per full Intelligence Index run), and the $0.10/$0.20 Contributor tier trades a 15x discount for training consent (100 RPM/3M TPM limits, data-use caveat).
- **Overall Score: 91/100.** Half-up mean of the five quality dims: (92 + 90 + 100 + 85 + 88) / 5 = 91.0 → 91 — numerically unchanged (Coding −2 offset inside the rounding). Best-fit stays the same: a frontier-adjacent default for long-horizon agentic and coding work at aggressive pricing; prefer lower effort or the Contributor tier when cost matters more than peak accuracy, and keep an independent check on hard-SWE tasks (FrontierSWE v2 miss).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-17 (first researched 2026-10-02; second pass 2026-10-11; third pass 2026-10-17)
- Method: public internet research, third pass over the prior reports (Meta's current model page and launch scorecard, BenchLM 43-row profile updated 2026-10-17, Artificial Analysis leaderboards, Vals AI, LiveBench, LMArena, Epoch hub, Proximal FrontierSWE board, plus independent reviews); scores are normalized 1-100 interpretations, not official vendor scores. This pass added FrontierSWE v2 25.8% (new independent negative), MazeBench 0%, AA-AnalystAgent 37.5%, exact FrontierMath v2 values, Design Arena drift → Coding 90→88; Overall held at 91.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
