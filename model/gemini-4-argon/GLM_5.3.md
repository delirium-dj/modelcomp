# Gemini 4 Argon — findings by GLM 5.3

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-11 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (High)
- **Short description:** Google's proprietary Gemini-4 frontier reasoning model, released 2026-09-30 and pitched at real-world software engineering, enterprise knowledge work (legal/finance), and defensive cybersecurity. Second-pass confirmation: #5 of 760 configurations on the BenchLeader Index (high effort, 70.0 ±3.9, still rising 66→74 since 2 Oct), #1 on the Vals Index (GDP-weighted economic impact), and a clean #1 sweep of all eight LMArena text categories.
- **Provider / access:** Google API, model ID `gemini-4-argon` (1 provider per Artificial Analysis). Second-pass rollout fact: access is PHASED — rolling out first to trusted cyber defenders via the Fairwind Program (Wiz "Scan for Good" is an early user), with wider developer/enterprise/consumer access "as soon as possible" starting with paid API customers and Google AI Ultra subscribers; the model ships without cyber guardrails for vetted defenders only.
- **Release / knowledge:** released 2026-09-30; knowledge cutoff not stated publicly.
- **IDs:** `google/gemini-4-argon` (no Free ID found on OpenCode Zen as of 2026-10-11).
- **Context window:** 1M tokens total (Artificial Analysis). Second-pass fact: the OUTPUT token limit is expanded to an industry-leading 1M tokens, up from 64K (official launch page) — headroom for single-trajectory deep reasoning.
- **Modalities:** text + image in (AA listing); text out. Second-pass fact: the official launch page claims video and document understanding ("identify details from long videos", "take action based on a series of documents") with LVBench long-video 91.7% state-of-the-art — vendor-verified video input, independent modality listing still text+image pending wider rollout (flagged). No audio; text-only output. Output speed not yet measured by AA.
- **Pricing (as of 2026-10-11):** introductory $2.00 / 1M input; $10.00 / 1M output; cached input 95% off. Second-pass fact: after the introductory period, $4/$20 applies (launch-page footnote) — the end-state price is Opus 5.5 territory. Verbosity remains: 110M tokens on the AA Intelligence Index vs 82M median drives $1.99/task during the intro period. Paid only — no free tier.
- **Architecture:** proprietary; parameters undisclosed. Internal Google case studies (qualitative, vendor-reported): quantum subroutine optimization beating a published baseline by 40%, fleet-wide memory optimization freeing 300+ TiB, and C/C++→Rust migrations up to 800K+ lines (Fuchsia Zircon kernel; libgav1 2.7x faster than the prior Rust port).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** (Google methodology page) / **57.1% #6** (AA) / **57.6% #5** (Vals) — consistent across three harnesses, short of the ~66% frontier band
- APEX-Agents (Mercor): **82.2% #1** (effort not stated — new this pass)
- GDPval-AA: **1626 Elo** raw (BenchLM, revised from the launch-era 1611) / **56.3% #21 normalized** (AA) — the normalized rank reveals mid-field professional-work standing, a tempering data point
- AA-Briefcase v1.1: **1488-1490 #27** (AA — mid-field, consistent with GDPval rank)
- AutomationBench: **51.3%** plain (Google; the official page ranks it #1 on Zapier's board) / **77.5% #1** (AA harness) — both harnesses retained
- Finance Agent v2 (Vals): **65.4% #1**; Tax Agent Bench: **76.2% #2**; CyberBench: **77.9% #2**; SREBench: **44.3% #3**; Legal Research Bench: **54.8% #4**; LegalBench: **88.3% #3**; Vending-Bench 2 (Andon): **#3**
- OSWorld 2.0: **69.2%** (Google methodology page)
- CWE-bench v1: **68.0%** — ties for #1 (official launch page; Collinear) — defensive-security remediation strength
- Harvey's Legal Agent Benchmark (Vals): **19.6% #5** — CONFLICT: Google's launch post claims "similarly leading performance" on HLAB, but Vals' own board ranks it #5 behind Muse Spark 1.3 (23.8% #2); vendor claim flagged, Vals number retained
- Agents' Last Exam: **39.5%** (Google methodology page); GDP.pdf: **21.8% #21** (AA); CUA-bench: **4.8% #7** (Vals); Terminal-Bench-Science: **57.6%** official (6x verifier timeout) vs **44.3% #3** (Vals)
- LMArena Agent: **9.3 #7**; Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: **no verified public score found** (unchanged)

Reasoning / knowledge:

- LMArena (high effort, new this pass): Text **1525 #1**, Hard Prompts **1551 #1**, Maths **1528 #1**, Instruction Following **1529 #1**, Creative Writing **1519 #1**, Multi-turn **1553 #1**, Longer Queries **1545 #1** — an unprecedented clean sweep of all measured LMArena text categories
- HLE: **57.1% #5** (AA — above the 40% frontier bar, top-5)
- CritPt: **27.1% #31** (AA — the reasoning soft spot; Opus 5.5's 31.7% is #2)
- MysteryMechanism: **45.5% #6** (Vals); ProofBench: **99.0% #4** (Vals)
- LABBench2: **88.8%** (Google methodology page)
- AA Intelligence Index v4.3.2: **52.6 #8** (updated from the launch-era "53, #8 of 223 in class" — same rank, bigger cohort)
- Vals Index: **68.9 #1** (Vals — GDP-weighted finance/coding/legal/tax composite; the launch page's headline claim, independently confirmed on Vals' board)
- AA-Omniscience: accuracy **49.9% #61**, non-hallucination **84.9% #5**, index **42.4 #9** — excellent honesty (15.1% hallucination rate), mid knowledge breadth
- GPQA Diamond / ARC-AGI / FrontierMath: **no verified public score found** (third search this pass still finds no rows for this ID — a genuine coverage gap in the reasoning dossier)
- Gray Swan IPI (15 attempts): **0.7%** (launch chart via BenchLM) — best-in-class prompt-injection robustness, corroborated by the launch page's "leading in prompt injection robustness" claim

Coding:

- DeepSWE v1.1: **77.9%** — official state-of-the-art claim (launch page; methodology page), tops Opus 5.5's 74.2% and Muse Spark 1.3's 75.4% but note both of those are vendor-run too
- IOI (Vals): **100.0% #1** (new this pass — the only measured configuration at 100%)
- LMArena Coding: **1562 #1** (new this pass); LMArena WebDev: **1678 #9**
- Code Migration (Vals): **68.2% #2**; Vibe Code Bench v1.1: **91.9% #2**; SciCode: **61.8% #4**; FrontierSWE: **55.0% #5**; ProgramBench (Vals): **2.5% #5** — an outlier-low Vals score flagged, not double-counted
- PostTrainBench v1.1: **45.3%** (Google methodology page)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: **no verified public score found** (third search confirms — still unpublished for this ID)

Long context:

- GraphWalks BFS **99.7%** at 128K; **84.2%** across 256K-1M (Google methodology page); AA-LCR **79.7% #83** (AA — weak rank; BenchLeader's Long context 65 is Argon's lowest category); 1M window verified via AA; 1M output limit (official) is unique among frontier models.

Multimodal (grounded):

- LVBench: **91.7%** — official state-of-the-art on long-video understanding (launch page; this verifies video input capability)
- Chartography (no tools): **71.6%** (Google methodology page); SAGE: **53.6% #5** (Vals); Blueprint-Bench 2: **54.5% #1** (Epoch). MMMU-Pro: still no score published for this ID.

### Normalized scores (1–100)

- **Tool use: 80/100.** Raised from 78: the new Vals professional-agent cluster is independently elite (Finance Agent #1, Tax #2, CyberBench #2, LegalBench #3, SREBench #3, Legal Research #4) plus APEX-Agents 82.2% #1, AutomationBench #1 on both harnesses, CWE-bench 68% tied #1, and OSWorld 69.2%. Capped by GDPval 56.3% #21 and AA-Briefcase #27 (mid-field professional aggregates), Agents' Last Exam 39.5%, CUA-bench 4.8%, GDP.pdf #21, and TB 4.0 at ~57% across three harnesses — short of the ~66% frontier band.
- **Reasoning: 85/100.** Raised from 82: LMArena Hard Prompts 1551 #1 and a clean 8-category LMArena sweep, HLE 57.1% #5, ProofBench 99% #4, MysteryMechanism #6, Vals Index 68.9 #1, LABBench2 88.8%, and best-in-class honesty (non-hallucination 84.9% #5). Capped by CritPt 27.1% #31, mid omniscience accuracy 49.9% #61, AA II 52.6 #8, and the still-missing GPQA/ARC-AGI/FrontierMath rows — a deep but incomplete reasoning dossier.
- **Context window: 95/100.** 1M window verified (AA) plus the new industry-leading 1M output limit; GraphWalks 99.7% at 128K but 84.2% across 256K-1M and AA-LCR 79.7% #83 keep it at the bottom of the ≥1M tier — the ≥98%-at-512K+ bar for 100 is not met.
- **Multimodal: 76/100.** Raised from 68: the launch page verifies video and document input with LVBench 91.7% state-of-the-art long-video understanding, professional chart analysis (Chartography 71.6%), SAGE 53.6% #5, and Blueprint-Bench 54.5% #1 — moving it into the video-in band. Capped below Muse Spark's 85 by the absence of audio input, text-only output, and the independent AA modality listing still reading text+image pending wider rollout.
- **Coding: 91/100.** Raised from 90: IOI 100% #1, LMArena Coding 1562 #1, Code Migration 68.2% #2, Vibe Code Bench 91.9% #2, and DeepSWE 77.9% (official SOTA claim) join SciCode 61.8% #4. Capped by missing SWE-bench Verified/SWE-Pro/LiveCodeBench rows, FrontierSWE 55.0% #5, PostTrainBench 45.3%, WebDev #9, and the flagged ProgramBench 2.5% outlier.
- **Cost efficiency: 62/100.** Lowered from 68: new verified evidence — the launch-page footnote reveals $2/$10 is INTRODUCTORY pricing; $4/$20 applies afterward, halving the value edge. During intro it matches the ~72 band, but the end-state price lands in Opus 5.5 cost territory, and Argon's verbosity (110M tokens per Intelligence-Index run vs 82M median; $1.99/task at intro prices) means the per-task bill roughly doubles at list price. The 95%-off cache reads are the remaining mitigant.
- **Overall Score: 85/100.** (80 + 85 + 95 + 76 + 91) / 5 = 85.4 → 85, up from 83 on 2026-10-01: the LMArena sweep, Vals Index #1, APEX-Agents #1, IOI 100%, and verified video understanding outweigh the post-intro price hike. Best fit: long-horizon agentic coding, professional knowledge work, and defensive cybersecurity — budget per task carefully, and note the phased rollout before betting production workloads on it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-11
- Method: public internet research, second pass over the 2026-10-01 report (official Google launch page and DeepMind evaluation-methodology page, BenchLeader data as of 2026-10-11, BenchLM updated 2026-10-10, Artificial Analysis leaderboards, Vals AI, LMArena, Mercor APEX, Epoch hub, Collinear, Andon Labs; three web searches — two successful, one blocked by a bot challenge — plus cross-checks against DataCamp and saascity.io reviews); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
