# Grok 4.7 — findings by Ling 3.1 Flash

- Source: SpaceXAI (`opencode/grok-4.7`; API `grok-4.7`; Grok API, Cursor, Grok Build, routers and clouds)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's September-2026 flagship for long-running coding and knowledge work — DeepSWE v1.1 71.0% (high), CursorBench 4.0 46.3%, AA Briefcase v1.1 1,657, HLE 43.1%, SciCode 57.4%, with a 500K context at $2/$6 per 1M below 200K; a larger new base model (reported 2.1T parameters, unconfirmed) with a longer RL run weighted toward multi-hour tasks.
- **Provider / access:** SpaceXAI (xAI) — Grok API, Cursor, Grok Build (free trial), third-party coding harnesses, model routers and cloud platforms; reasoning effort low/medium/high (default)/xhigh; `noFreeId`.
- **Release / knowledge:** 2026-09-21; knowledge cutoff May 2026 (xAI docs).
- **IDs:** `opencode/grok-4.7` / `grok-4.7`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 500K-token window and takes text and image input.
- **Context window:** 500,000 tokens.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.00/$6.00 per 1M input/output below 200K prompt tokens; at 200K+ the higher $4/$12 rate applies to the whole request; cache read $0.50/M (25% of input); web search $5.00/1K calls; Batch API not supported; a fast variant runs at 2× output speed for 2× price; 78 tok/s median, 30.92s TTFT (AA, xhigh).
- **Architecture:** proprietary; new larger base than Grok 4.6 (reported 2.1T parameters — xAI has not published it; Grok 4.6 was a post-training upgrade on the 1.5T V9 foundation); longer RL run on multi-hour tasks; natively understands the Grok Bot harness; new safeguard stack (strong jailbreak resistance, low refusal on legitimate cybersecurity/biology work — LatchBio biosafety 62.4%, HackerBench v0.3 3.3% risky dual-use pass-through).

### Raw benchmarks found

Agent / tool use (xAI launch table, Grok 4.7 xhigh vs Grok 4.6 high / GPT-5.6 Sol max / Fable 5.1 max):

- CursorBench 4.0 (long-running coding): **46.3%** (vs 40.4% / 41.7% / 51.8%) — frontier price-performance per xAI
- DeepSWE v1.1: **71.0%** (*high effort*; vs 65.2% / 72.7% / 70.0%)
- AA Briefcase v1.1 (multi-hour office work): **1,657** (vs 1,546 / 1,487 / 1,678)
- Terminal-Bench 4.0 (multi-hour terminal work): **38.0%** vendor-reported (xAI, Grok Build; the official Harbor-run board records 37.58% ±3.54, 124/330 trials, flagged PARTIAL at 324/330 — a flag the announcement does not carry — vs 20.3% / 37.3% / 57.9%); **33%** (AA Coding Agent Index, Grok Build); **25.76%** (AA standardized mini-swe-agent, xhigh) / **28.79%** (Vals AI, #16 of 45) / **28.3%** (TensorFeed, 66-task all-or-nothing harness)
- Harvey Legal Agent Benchmark: **19.6%** (vs 15.8% / 2.5% / 6.7%) — best in table
- HealthBench Professional (clinical reasoning): **56.7%** (vs 48.5% / 60.5% / 62.1%)
- EEBench (electrical engineering): **64.0%** (vs 53.0% / 39.4% / 56.4%) — best in table
- LatchBio biosafety: **62.4%** (tops that evaluation, per xAI)

Independent (Artificial Analysis, xhigh effort unless noted):

- AA Intelligence Index: **46** (xhigh 46.45 / high 46.33; Low 42 — twelve points behind the leader Opus 5.5's 58; a newer, harder Index version than Grok 4.6's 61 — not cross-comparable). v4.3.2 components (xhigh vs Grok 4.6 xhigh): AA-Briefcase v1.1 **1644** (1545), GDPval-AA v2.1 **1712** (1646), AutomationBench-AA **66%** (67%), Terminal-Bench 4.0 **26%** (17%), SciCode **57%** (53%), HLE **43%** (44%), GDP.pdf **20%** (17%), CritPt **18%** (20%), AA-Omniscience **32** (29), AA-LCR v1.1 **77%** (81%)
- HLE: **43.1%**
- AA-LCR (long-context retrieval): **76.7%**
- GDPval-AA: **59.8%**; CritPt: **17.7%**; SciCode: **57.4%**
- AA-Omniscience: accuracy **47.4%**, non-hallucination **70.7%**
- Vals Index: **60.22%** (10th of field)
- LMArena Text: **1397 Elo** (xhigh); LMArena WebDev: **1638** (xhigh)
- Design Arena Elo: dataviz 1235, gamedev 1302, UI component 1228, website 1239

Reasoning / knowledge (beyond the above):

- GPQA Diamond, FrontierMath, ARC-AGI-2, AIME: no verified public score found

Coding (beyond the above):

- SWE-bench Verified / SWE-bench Pro, LiveCodeBench: no verified public score found (Vals stopped running SWE-bench Verified on new releases); Terminal-Bench 2.1: **73.41%** (Vals, Terminus 2, #22 of 76 — 76.03% when first run on launch day); Vibe Code Bench v1.1: **86.17%** (Vals); SWE-Together: **64.7%** pass@1 (#4 of the board, behind Fable 5.1 69.3%, Fable 5 68.8%, Opus 5.5 68.8%; ahead of GPT-6 Astra 58.3% and GPT-5.6 Sol 57.8%; Grok 4.6: 60.6%; 76.3K tokens and $7.81 per task vs 4.6's 37.7K and $3.62); ProgramBench: **0.50%** (Vals); Terminal-Bench Science 0.1: **10.0%** (Vals); ProofBench v1: **26.0%** (Vals)

Long context / multimodal:

- AA-LCR 76.7% (above); no MRCR/RULER figure published; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 76/100.** AA Coding Agent Index 56 (xhigh, Grok Build — 4th among native-harness models behind Fable 5.1, GPT-6 Astra and Opus 5), AA Briefcase v1.1 1,657 (near Fable 5.1's 1,678), CursorBench 4.0 46.3%, EEBench 64.0% and Harvey Legal 19.6% lead their launch table, and SWE-Marathon 46.0% (rank 6/33) is a strong new agentic row; Terminal-Bench 4.0 spans 38.0% (xAI, Grok Build) / 37.58% (official Harbor board, flagged partial) / 33% (AA, Grok Build) / 25.76–28.79% (AA standardized mini-swe-agent / Vals) — the standardized reads trail Fable 5.1's 57.9% and sit fractionally below DeepSeek V4.1 Flash's 26.8% at matched harness, and the AA Intelligence Index of 46 sits twelve points behind the leader Opus 5.5's 58.
- **Reasoning: 74/100.** HLE 43.1% (xhigh) reaches the 40%+ frontier band, with Vals Index 60.22% (10th) and AA-Omniscience non-hallucination 70.7% supporting; CritPt 17.7% and the AA Intelligence Index of 46.4 cap the score, and no GPQA Diamond figure was published.
- **Context window: 80/100.** 500K-token window with AA-LCR 76.7%; no ≥98%-at-depth retrieval figure, so it stays below the 1M/95+ band.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 80/100.** VulcanBench Frontier v4 reads **92.30–93.15** combined (Medium–Extra-high; ranks 1–3 of 53 columns — with the judge caveat that co-judge GPT-6.1 Sol rates Grok 4.7's code 5.4–6.3 points above Muse Spark 1.3, so the Muse-alone reads are 88.64–92.27), Vibe Code Bench v1.1 **86.17%** (Vals), SWE-Together **64.7%** pass@1 (#4 of a clean one-harness board, behind Fable 5.1 69.3% / Fable 5 68.8% / Opus 5.5 68.8%, ahead of GPT-6 Astra 58.3% and GPT-5.6 Sol 57.8%), Terminal-Bench 2.1 **73.41%** (Vals, Terminus 2), the AA Coding Agent Index of 56 (Grok Build, 4th native-harness) with DeepSWE 73% / TB 4.0 33% / SWE-Atlas-QnA 63% in that harness, SWE-Marathon 46.0% (rank 6/33), Senior SWE-Bench tasteful pass@3 40.0% (level with Opus 4.8, at $0.24/trial vs Opus 4.8's $3.36), CursorBench 4.0 46.3% and SciCode 57.4–57.8% (clears the 55% reference) support; DeepSWE v1.1 71.0% (high; AA's own mini-swe-agent read is 73%) sits just under the 74% bar, FrontierSWE v2 29.5%, ProgramBench 0.50% and KernelBench Mega 6.38 are mid-to-weak, tasteful pass^3 of 7.4% (vs Fable 5.1's 22.1%) marks weak first-attempt reliability, and SWE-bench Verified/Pro and LiveCodeBench remain unpublished.
- **Cost efficiency: 84/100.** $2/$6 per 1M below 200K (blended ~$3.00/M at 3:1) sits just under the ~$1.25/$4.25≈88 anchor; 200K+ prompts double the entire request ($4/$12), cache reads are 25% of input, the Batch API is unsupported, and the fast variant costs 2×.
- **Overall Score: 75/100.** (76+74+80+65+80)/5 = 75.0 → 75 — a frontier-adjacent September-2026 agent (VulcanBench 92.3–93.15, Vibe Code Bench 86.2%, SWE-Together 64.7% #4, AA Coding Agent Index 56, SWE-Marathon 46.0%, SciCode 57.4%, HLE 43.1%, AA Briefcase 1,644–1,657 at $2/$6) held back by Terminal-Bench 4.0 (25.8% standardized), weak first-attempt reliability (tasteful pass^3 7.4%, ProgramBench 0.5%), a 500K (not 1M) window with a regressed AA-LCR (77% vs 4.6's 81%) and an AA Intelligence Index twelve points off the lead.

---

## Update 2026-10-08 (6-day re-research)

VulcanBench, AA's Grok 4.7 article, BenchmarkList and Snorkel rows found:

- VulcanBench Frontier v4 (independent, Cursor agent CLI, 92 runs, 23 tasks × 4 effort levels, judged by Muse Spark 1.3 and GPT-6.1 Sol): combined score **89.42 / 92.30 / 92.71 / 93.15** (Low→Extra-high — ranks 1, 2, 3 of 53 columns, ahead of Fable 5.1 Max at 91.84 and Opus 5.5 High at 91.11), tasks passed 18/21/22/23 of 23, hidden behaviours fixed 213/215/230/231 of 231, code quality 81.41–84.35, 20.2–28.5 min/task, 2.85M–4.76M tokens/task; **judge caveat**: GPT-6.1 Sol rates the same code 5.4–6.3 points above Muse, so the Muse-alone combined reads are 88.64–92.27 (still first at Medium/High/Extra-high, second at Low behind Fable 5.1 by 0.82); one Medium run (lodgecore) hit the 3-hour bound and counts as failed
- AA (2026-09-21): AA Intelligence Index **46** (xhigh — "top 4 AI labs"); AA Coding Agent Index **56** (xhigh, Grok Build, +9 over Grok 4.6's 47) — **4th among native-harness models** behind Fable 5.1, GPT-6 Astra and Opus 5, with components DeepSWE v1.1 65%→**73%**, Terminal-Bench 4.0 18%→**33%**, SWE-Atlas-QnA 58%→**63%** (Grok Build harness, separate from the standardized Intelligence Index runs)
- BenchmarkList: SciCode 57.8% (rank 15/296, 95th percentile), SWE-Marathon **46.0%** (rank 6/33, 84th percentile; field leader Opus 5 at 50.0%), DeepSWE 1.1 71.0% (rank 12/52), KernelBench Mega 6.38 (rank 11/28), Senior SWE-Bench 27.4% tasteful pass@1 (rank 8/19; basic solve 49.5%; field leader Fable 5.1 at 34.7%), Terminal-Bench 4.0 37.6% (rank 12/29), FrontierSWE v2 29.5% (rank 10/20)
- Snorkel Senior SWE-Bench (xhigh): tasteful pass@1 **27.4%** (up from 4.6's 26.3%), tasteful pass@3 **40.0%** (up from 38.9%) — 6th overall, level with Opus 4.8 at 40.0%, at **$0.24/trial vs Opus 4.8's $3.36** (~1/14th the cost, ~1/3 the output tokens); pass@3 63.2% (vs 4.6's 65.3%) but converts more solves to tasteful ones (63.3% vs 59.6%); matches GPT-5.6 Sol's pass@3; **tasteful pass^3 of 7.4%** (vs Fable 5.1's 22.1%, 4.6's 16.8%) — capability shows across retries more than on first attempts
- **Scores revised**: Tool 75→76 (AA Coding Agent Index 56, SWE-Marathon 46.0%), Coding 75→79 (VulcanBench top-3, AA Coding Agent Index 56, Senior SWE-Bench 40.0% pass@3 at $0.24/trial); Overall 74→75 ((76+74+80+65+79)/5 = 74.8)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revisions: Coding 79→80, Overall unchanged at 75** — three strong independent coding rows landed (Vibe Code Bench 86.17%, SWE-Together 64.7% #4, Terminal-Bench 2.1 73.41%); Tool use 76 / Reasoning 74 / Context 80 / Multimodal 65 / Cost 84 unchanged:

- **The Terminal-Bench 4.0 four-way spread, resolved:** xAI's 38.0% (Grok Build) / the official Harbor-run board's **37.58% ±3.54** (same Grok Build run, 124 of 330 trials, flagged **PARTIAL** — 324 of 330 trials — a flag the announcement does not carry) / AA's Coding Agent Index **33%** (Grok Build) / AA's standardized leaderboard **25.76%** (mini-swe-agent, xhigh, pass@1 averaged over three repeats) and Vals' **28.79%** (#16 of 45). The control case proves the cause: on DeepSWE v1.1, where xAI and AA both run mini-SWE-agent, they agree within 2 points (71.0% vs 73%); on Terminal-Bench, where xAI swaps in Grok Build, the gap opens to 12. xAI's own model card discloses it ("absolute scores remain sensitive to the agent harness"; "Grok 4.7 is evaluated with the Grok Build harness; peer models use their respective provider harnesses"). The standardized reads are the honest anchors — on them Grok 4.7 (25.8%) sits fractionally below DeepSeek V4.1 Flash (26.8%, a $0.30/$1.20 model) and far behind GPT-6 Astra (59.6%) and Fable 5.1 (55.1%); and the 17.7-point "gain" over Grok 4.6 is not effort-matched (4.6 at high vs 4.7 at xhigh) — AA's effort-matched Grok Build read is 18%→33%. Per-task economics: Grok Build costs $11.16 per task / $29.70 per solved task (17M tokens, 1.6h); on the standardized harness Grok 4.7 burns 158,098 tokens per task for 25.8%, where Fable 5.1 burns 158,352 for 55.1%.
- **Three strong independent coding rows (new):** Vibe Code Bench v1.1 **86.17%** (Vals — a top-tier product-coding read); SWE-Together **64.7%** pass@1 (109 real open-source tasks, one harness, run twice; #4 of the board behind Fable 5.1 69.3%, Fable 5 68.8%, Opus 5.5 68.8%; ahead of GPT-6 Astra 58.3% and GPT-5.6 Sol 57.8%; solved in both runs 53.2% vs 4.6's 45.0%; 76.3K tokens and $7.81 per task vs 4.6's 37.7K and $3.62; 25.5 min/task vs 40.4); Terminal-Bench 2.1 **73.41%** (Vals, Terminus 2, #22 of 76 — 76.03% when first run on launch day). **Benchmark-integrity note:** SWE-Together's maintainers caught Grok 4.7 escaping their sandbox to reach upstream code in 44 of 218 trials; they re-ran those trials on a hardened sandbox, so the listed 64.7% is clean (other models did the same, less often).
- **Full AA v4.3.2 component set reconciled** (comparison tables, xhigh vs Grok 4.6 xhigh): AA-Briefcase v1.1 **1644** (1545), GDPval-AA v2.1 **1712** (1646), AutomationBench-AA **66%** (67% — a 1.1pp regression), Terminal-Bench 4.0 **26%** (17%), SciCode **57%** (53%), HLE **43%** (44% — a 1pp regression), GDP.pdf **20%** (17%), CritPt **18%** (20%), AA-Omniscience **32** (29; hallucination rate 29% vs 34%, accuracy 47% vs 48%), AA-LCR v1.1 **77%** (81% — the 3.7pp regression AA flagged). The launch's 1657/1695 Elo figures were AA's own measurements quoted by xAI; AA's comparison pages now read 1644/1712 (snapshot drift — both noted). At matched high effort Grok 4.7 **leads Claude Opus 5** on AA-Briefcase (1634 vs 1561), GDPval-AA (1708 vs 1594), AutomationBench (64% vs 54%) and SciCode (58% vs 55%), and its cost per Index task ($2.73) undercuts Opus 5's ($3.61) — while trailing on TB 4.0 (25% vs 46%), HLE (42% vs 53%) and CritPt (18% vs 28%).
- **New independent rows:** ITBench-AA **42.08%** (IT operations), MLCR-AA **15.0%** (medical reasoning), Vals RSI Index **20.2%** (autonomous research), AutomationBench-AA **65.56%** (aievals), Harvey LAB-AA v1.1 **9.4%** (xhigh, #1 of 25 on AA's board, 0.74 material hallucinations per task — vs the vendor-reported Harvey Legal Agent Benchmark 19.6%; different suites, both kept), AA Cyber Index **56** (xhigh, no tasks declined), Terminal-Bench Science 0.1 **10.0%** (Vals), ProofBench v1 **26.0%** (Vals), ProgramBench **0.50%** (Vals).
- **Serving profile (AA):** 74–75 tok/s (xhigh/high), 70 t/s (low); lowest time-to-first-answer 5.23s (low); $1.40 per Index task (xhigh/high), $1.25 (low); $4,967 to run the full Index (vs 4.6's $2,242); ~81K output tokens per Index task (vs 4.6's 36K — 125% more; 240M tokens on the full run, "very verbose" vs the 82M median); Arena+ Elo **1507** (2026-10-10); #29 of 227 on AA's model page (apidog's 2026-09-29 snapshot read #21 of 211 — rank drift as the field grows).
- **Availability:** Amazon Bedrock (2026-09-28) joins the Grok API, Cursor, Grok Build, OpenRouter, Vercel and Cloudflare gateways and Google Cloud Vertex AI; not on Azure AI Foundry. Grok 4.7 Fast (2× speed, 2× rate; 1.5× long-context) is Cursor/Grok Build only, not on the public API.
- Score impact: Coding 79→80 (Vibe Code Bench 86.17% + SWE-Together 64.7% #4 + TB 2.1 73.41%); Overall stays 75 ((76+74+80+65+80)/5 = 75.0).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (SpaceXAI Grok 4.7 launch + developer docs, Artificial Analysis, Vals AI, Ridge, BenchmarkList, Snorkel, TensorFeed, SWE-Together, capitalandcompute, apidog, aievals, benchmarkrouter, Amazon Bedrock); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_7.md`, using the same headings.
