# GPT-6.1 Sol — findings by GLM 5.3

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-11 (UTC) — second-pass re-research of the 2026-10-01 report (written 2 days post-release)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's proprietary reasoning model for complex coding, computer use, and professional work — "near-Astra intelligence for a fifth of the price" ($2/$10 vs Astra's $10/$50). Second-pass confirmation of the positioning: BenchLeader **#10 of 760** at max effort (69.3 ±3.2, trend 64→73 still rising), BenchLM **#3 of 889** (84.18 — up from 66.47 #25/636 at the 2-day-old first pass as coverage grew from ~15 to 32 rows), Epoch Capabilities Index **#3** (166.1), Vals Index **#8** (61.1).
- **Provider / access:** OpenAI API (Responses API for tool calling; Chat Completions without), model ID `gpt-6.1-sol`; 6+ providers per AA — OpenAI (multiple price tiers incl. Flex $1/$5 and Priority $12/$60), Azure ($2.20/$11), Amazon Bedrock ($2.20/$11; AWS model card published). ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu); **not yet in Chat**. An **Ultrafast** variant (up to 8x faster generation) was announced as coming.
- **Release / knowledge:** released 2026-09-29; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6.1-sol` (no Free ID found on OpenCode Zen as of 2026-10-11).
- **Context window:** 1,050,000 tokens total; 922,000 max input / 128,000 max output (OpenAI model docs; AA lists 1M; BenchLeader 1.1M).
- **Modalities:** text + image in; text out; reasoning (efforts low→max; BenchLeader ladder: low 65.2 #40, medium 67.5 #24, high 67.9 #16, xhigh 67.2 #25, max 69.3 #10 — max costs 5.5x low for +4.1 index points); tool calls (web_search, file_search, code_interpreter, hosted_shell, computer_use, mcp, apply_patch, skills); structured outputs / JSON mode; prompt caching.
- **Pricing (as of 2026-10-11):** $2 / 1M input; $10 / 1M output; **cached input $0.10 (95% off — and 50% below GPT-6 Sol's cache price)**; cache writes $2.50; >272K prompts 2x in / 1.5x out; Fast mode 2x; Batch/Flex 50% lower. AA per-Intelligence-Index task: **$0.72 vs Astra's $3.26** (codersera, read 2026-10-05). Caveat: at max effort the first answer takes ~327 s at 56 tok/s (BenchLeader) — 5.5 minutes to first token on chat-shaped workloads; $0.724/II run at max. Paid only.
- **Architecture:** proprietary; parameters undisclosed. Safety posture (system card addendum): broken-search-tool disclosure failure 2.1% (vs GPT-6 Sol 4.9%, Astra 1.5%, Luna 28.7%); factual-error rate on flagged prompts 7.7% at low effort (down ~32% from GPT-6 Sol), within 1.9 pp of Astra; no reviewer-bypass attempts observed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: AA ladder 30.8%→**56.1% #9** (max) / Vals **55.0% #6** — near-frontier (Opus 5.5: 59.6% #2 AA / 65.2% #1 Vals); an early snapshot read 49.3% (buildfastwithai) — the board settled higher
- Terminal-Bench 2.1: no public-board entry for this ID yet (BenchLM's TB2.1 top three: SWE-2 92.8%, GPT-5.6 Sol 91.9%, DeepSeek V4.1 Flash 90.6%); closest provisional: **83.15% at max** (third-party "Ridge" ledger, 2026-09-23, via buildfastwithai — flagged provisional, no public-board confirmation)
- Terminal-Bench (public tbench.ai): **58.2% #17**; Terminal-Bench-Science 0.1: **57.0%** (OpenAI; Astra leads at 68.1%; **$5.47/task at max vs Opus 5.5's $23.21 and Astra's $23.80**); Terminal-Bench Hard: no row found for this ID
- APEX-Agents: **60.0% #12** (Mercor); LMArena Agent: **11.7 #5**; LiveBench Agentic Coding: 54.5% #31 (max; 56.8% #24 xhigh)
- GDPval-AA: **1575 Elo** raw / **53.8% #35 normalized** (AA, max; ladder 39.9%→53.8%) — mid-field professional-work rank
- AA-Briefcase v1.1: **1557-1564 #16** (AA, high→max); Analyst Agent (AA): **50.0% #7**; SREBench (Vals): **50.8% #2**; Tax Agent 62.3% #26; Finance Agent 52.0% #30; Legal Research 38.5% #27; CyberBench **39.3% #39** (weak); Harvey HLAB 5.4% #28; Harvey LAB (AA) 6.9% #4
- AutomationBench: **36.1%** plain (OpenAI; +2.2pp over Opus 5.5 at medium effort per the announcement) / **64.9% #10-14** (AA harness); GDP.pdf: **31.0% #2-4** (AA — higher than Opus 5.5 with fallbacks per OpenAI, at <half the cost)
- OSWorld 2.0 (offline set, v2026.08.08, partial reward): no absolute number published — vendor deltas only (+7pp over GPT-6 Sol at max, within 2.1pp of Astra at ~1/7 cost per task)
- ExploitGym: **35.1%** (system card addendum); Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathlon / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **95.4% #3** (Epoch, max) — found this pass, resolving the 2026-10-01 gap; of 287 configurations only two score higher
- FrontierMath v2: Tiers 1-3 **93.7% #1**; Tier 4 **100.0% #1** — the only perfect Tier-4 score measured (Opus 5.5: 95.0% #6; muse 1.3: 46.3% #25); OTIS Mock AIME **100.0% #1**; ProofBench 99.0% #4; LiveBench Mathematics 96.8% #3; LMArena Maths 1488 #29
- ARC-AGI-2: **94.2% #2** (ARC Prize verified, max; ladder 76.7% low → 94.2% max); ARC-AGI-1: **98.5% #1** (high; 96.5% #21-44 across settings); ARC-AGI-3 — CONFLICT RESOLVED via ARC Prize's own results page: **52.7% with the Standard harness** (max) vs **96.4% with the Provider Adapter harness** (preserves opaque reasoning state); both are real, different protocols — either way the best ARC-AGI-3 profile in this report set (GPT-5.6 Sol: 7.8%)
- HLE (AA): ladder 47.4%→**52.9% #17** (max) — top-20; CritPt: ladder 24.9%→**31.7% #2** (max/xhigh — tied with Opus 5.5, behind only GPT-5.6 Sol's 32.3%)
- LiveBench: Reasoning **92.6% #2** (max), global **81.6% #6**, Language **90.1% #2**, Data Analysis **82.7% #2**, IF 74.2% #12, Coding 80.4% #19
- LMArena: Hard Prompts **1507 #19**, Coding **1545 #8**, WebDev **1755 #4**, Text 1484 #21, IF 1488 #15, Creative 1462 #26, Multi-turn 1487 #25, Longer 1496 #20, Maths 1488 #29
- Mystery Game Puzzles **80.0% #2**; Chess Puzzles 61.0% #4; MysteryMechanism 46.4% #5; SimpleQA Verified **73.9% #2**; MultiChallenge (Scale) **82.0% #1**; EBR-bench 54.3% #4; BioMysteryBench **79.6% #2**
- AA Intelligence Index v4.3.2: ladder 42.1→**51.8 #11** (max; AA's own release page: "GPT-6.1 Sol (Max) at 52"; early press reads 47.5-48 — settling upward as coverage grows)
- Omniscience: index **41.5 #11-12** (max; ladder 37.6→41.5), accuracy **62.1% #12**, hallucination rate **54.3%** (non-hallucination 45.7% #135) — the family's confabulation problem is much milder here than GPT-5.6 Sol's 92.2%, but still mid-weak
- MLCR-AA: **33.9% #15** (mid); AA-LCR: **83.0% #24** (max; ladder peaks 84.0% #11 at low); AA-IFBench 74.2% #12
- HealthBench family (system card addendum): raw 56.7%, length-adjusted 58.5%, Professional 64.2% (raw 67.2%), Hard 36.2%

Coding:

- IOI (Vals): **96.9% #3**; Code Migration: **65.1% #5**; Vibe Code Bench v1.1: **88.9% #7**; LMArena WebDev: **1755 #4**; LMArena Coding: **1545 #8**; FrontierCode (Cognition): 50.2% #7 (medium)
- DeepSWE v1.1: **71.9%** (OpenAI — matches GPT-6 Astra per the announcement, +6.4pp over GPT-6 Sol's best, at lower effort/cost); just under the 74% frontier reference
- AA Coding Index ≈ **60** at xhigh (theairankings: 3 points over GPT-6 Sol's 57, 2 below Astra's 62; xhigh scores 3 higher than max)
- Terminal-Bench 4.0: 55.0-56.1% #6-9 (see agent rows); LiveBench Coding 80.4% #19; Bug Hunt Bench **44.3 fixes**; SciCode: **54.2% #59-61** (mid — just under the 55% reference, the soft spot)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / CursorBench: no verified public score found for this ID (unchanged)

Long context:

- AA-LCR 83.0% #24 (max); MLCR 33.9% #15; 1.05M window (922K in / 128K out) verified on OpenAI docs; no RULER/MRCR/GraphWalks value at 512K+ published.

Multimodal (grounded):

- AA-MMMU-Pro: ladder 83.1%→**86.0% #6** (max — near the top of the image-in tier, Opus 5.5 leads at 87.7%); LMArena Vision 1288 #30 (mid); SAGE 46.5% #35 (weak); text+image in, text out.

### Normalized scores (1–100)

- **Tool use: 78/100.** Raised from 72 — the first-pass cap compared Terminal-Bench 4.0's 56.1% against an "85%+ frontier band" that belongs to TB 2.1, not the much harder TB 4.0; on the corrected reference frame 56.1% is **near-frontier (#6-9 AA, #6 Vals)**. Add SREBench 50.8% #2, LMArena Agent 11.7 #5, APEX 60.0% #12, Analyst Agent 50.0% #7, AutomationBench 64.9% #10 (AA harness), GDP.pdf 31.0% #2-4, TB-Science 57.0% at 1/4 of Opus 5.5's per-task cost. Capped by mid-field professional aggregates (GDPval #35, Briefcase #16, Tax #26, Finance #30, Legal Research #27), weak CyberBench 39.3% #39 and HLAB 5.4% #28, ExploitGym 35.1%, and the still-missing TB2.1/Tau public rows.
- **Reasoning: 89/100.** Raised from 78 — both first-pass caps dissolved: CritPt 31.7% is the **#2** score on the board (not a weakness), and GPQA now has a verified **95.4% #3**. The math suite is the best measured anywhere in this report set: FrontierMath Tier 4 100% #1, Tiers 1-3 93.7% #1, OTIS 100% #1; plus ARC-AGI-2 94.2% #2, ARC-AGI-3 up to 96.4% (Provider Adapter; 52.7% Standard — harness split documented), LiveBench Reasoning 92.6% #2, HLE 52.9% #17, SimpleQA 73.9% #2, MultiChallenge 82% #1, Mystery Game 80% #2. Remaining caps: 54.3% hallucination rate (non-hallucination #135 — milder than the family's worst but still mid-weak), MLCR 33.9% #15, AA II 51.8 #11, LCR #24, SciCode-adjacent weaknesses.
- **Context window: 95/100.** Held: 1.05M total with the documented 922K/128K split (≥1M tier); AA-LCR 83.0% #24 and MLCR 33.9% #15 do not meet any ≥98%-at-512K+ bar for 100.
- **Multimodal: 68/100.** Held: text+image in, text out; MMMU-Pro 86.0% #6 puts it near the top of the image-in band, but LMArena Vision #30 and SAGE #35 show grounded-vision quality is mid — top-of-tier claim now rests on MMMU-Pro alone.
- **Coding: 88/100.** Raised from 86: the second pass surfaced IOI 96.9% #3, Code Migration 65.1% #5, Vibe Code 88.9% #7, LMArena Coding 1545 #8 and WebDev 1755 #4 — five top-10 finishes — on top of DeepSWE 71.9% (Astra-matching, vendor) and near-frontier TB 4.0. Capped by SciCode 54.2% #59-61 (below the 55% reference), LiveBench Coding #19, the still-missing SWE-bench Verified/LiveCodeBench rows, and BenchLeader scoring Coding 72 (its second-lowest category at max).
- **Cost efficiency: 72/100.** Held: $2/$10 with the 95%-off $0.10 cache read sits between the ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors; $0.72 per Intelligence-Index task (vs Astra $3.26, GPT-6 Sol $1.04) and 50% Batch/Flex keep it at 72 — with the max-effort latency caveat (327 s first answer, 5.5 min full chat reply, 5.5x low-effort cost) and the Ultrafast variant as the pending fix.
- **Overall Score: 84/100.** (78 + 89 + 95 + 68 + 88) / 5 = 83.6 → 84, up from 80 on 2026-10-01: two days of post-release data resolved both reasoning caps and corrected the TB 4.0 reference frame, revealing a top-10 composite (#10 BenchLeader, #3 BenchLM, #3 Epoch ECI) with the strongest mathematics profile measured in this report set. Best fit: long-horizon agentic coding, computer-use and professional-document work where near-Astra quality at one-fifth the price is the priority; route to lower efforts (high is #16 at 1/50th max latency) for interactive use, and reserve max for the hardest problems.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-11
- Method: public internet research, second pass over the 2026-10-01 report (OpenAI's GPT-6.1 Sol announcement and system-card addendum, OpenAI model docs and AWS Bedrock model card, Artificial Analysis model benchmarks and its GPT-6.1 Sol release page, BenchLeader data as of 2026-10-12 with the full effort ladder, BenchLM updated 2026-10-10, ARC Prize verified results page (resolving the ARC-AGI-3 harness split), Epoch AI Benchmarking Hub, Vals AI, LiveBench, LMArena, Scale SEAL, Mercor, Harvey; three successful web searches; independent reviews: buildfastwithai, codersera, emergent.sh, theairankings, aitoolsreview, computingforgeeks, benchmarklist); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
