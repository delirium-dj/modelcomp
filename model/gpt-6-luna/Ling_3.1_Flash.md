# GPT-6 Luna — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-6-luna`; API `gpt-6-luna`; OpenAI API, ChatGPT Work, Codex, Azure, Amazon Bedrock, OpenAI Flex/Fast/Batch)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's most efficient GPT-6 tier (2026-09-22; 50% below GPT-5.6 Luna's promotional pricing) — DeepSWE v1.1 66.6% (max, "comparable to Claude Opus 5 and Fable 5 at medium effort" at 93–96% lower cost per task), HLE 38.5%, ARC-AGI-2 59.3%, across a 1.05M context at $0.10/$0.50 per 1M; most Luna-tier evaluation figures were published only for Sol.
- **Provider / access:** OpenAI API (ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu; Free/Go users get GPT-6 Luna in the desktop app; not yet in Chat), Azure, Amazon Bedrock, Batch/Flex at 50%, Fast at 2×. `noFreeId`.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna` / `gpt-6-luna`. NOTE: the repo `meta.json` is vague on pricing ("Paid-tier pricing"); the actual rate is $0.10/$0.50 per 1M.
- **Context window:** 1,050,000 tokens total (922,000 max input per API docs); 128,000 out. Gotcha: function calling breaks on the older Chat Completions API unless reasoning effort is set to none.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $0.10/$0.50 per 1M input/output; cached input $0.01/M (10%); cache writes $0.125/M (1.25×); >272K prompts billed 2× input/cache and 1.5× output for the full request; regional +10%; Batch/Flex 50% ($0.05/$0.25); Fast 2× ($0.20/$1.00); blended ~$0.07/M (AA, 7:2:1); 145 tok/s (max).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (OpenAI GPT-6 Sol/Luna launch, 2026-09-22; Luna figures where published):

- DeepSWE v1.1: **66.6%** (max) — "comparable to Claude Opus 5 and Fable 5 at medium effort"; ~93% less per task than Opus 5, ~96% less than Fable 5 (Sol max: 68.8%, within 1.1pp of Fable 5's 69.9%)
- OSWorld 2.0 offline: Luna (max) exceeds GPT-5.6 Sol (medium) at one tenth the cost (Luna's percentage not published; Sol xhigh: 60.5% ≈ Opus 5 medium's 60.3%)
- AutomationBench: Luna figure not published (Sol xhigh: 33.2% at $0.27/task — 9% of Opus 5 max's cost); vendor: Luna (high) improves on its predecessor by 5.4pp at 58% lower cost per task
- Agents' Last Exam: **25.0%** (Snorkel board, Codex harness, max — a real 5.3pp gap vs GPT-5.6 Luna's 30.3%; Sol max: 56.4%)
- OSWorld 2.0 offline: **52.7%** (max, vendor-reported from launch charts; exceeds GPT-5.6 Sol medium at ~1/10th cost)
- AutomationBench 1.0.6: **20.7%** (max, Zapier, vendor-reported) vs **53%** (AA's AutomationBench-AA, max — a different benchmark, conflict kept); vendor: Luna (high) improves on its predecessor by 5.4pp at 58% lower cost per task
- FrontierCode 1.1 Main: **42.4%** (max, Cognition, codex harness, mean@5)
- EMB (Excel Modeling): **68.5%**; Finance Agent v2: **49.9%**; Public Benefits Bench v1.1: **57.6%**; SAGE: **48.1%**; Tax Agent Bench: **58.9%**; Legal Research Bench: **30.3%**; Harvey's Legal Agent: **2.9%**; Coarena: **80.4%**
- FrontierCode: Luna figure not published (Sol matches Fable 5.1 xhigh at much lower cost)
- LMArena Agent: **1.7%** (#22 of 46, max — weak)
- Community Codexometer (3 executed tasks, 2026-09-22): **3/3 pass** at ~$0.002/task, 14.5–27.4s (GPT-5.6 Luna high failed 1/3)

Reasoning / knowledge (independent, max effort):

- Humanity's Last Exam (AA run): **38.5%** (#91 of 648)
- ARC-AGI-2 (Verified): **59.3%** (#80 of 246); ARC-AGI-3 (Verified): **0.2%** (medium — very weak)
- AA Intelligence Index: **37–38.1** (max; xhigh 34, high 32, medium 29, low 21, non-reasoning 18)
- LMArena Arena text: **1444 Elo** (#85 of 410); Arena coding: **1511** (#53 of 405)
- ModelCap Index: **71.4** (#31 of 280)
- GPQA Diamond: **90.5%** (Epoch AI, Inspect harness, 198 Q, max) — fills the gap; FrontierMath Tier 4 v2: **56.1%** (Epoch AI, max, with tools); FrontierMath v2: **78.9%**; ProofBench v1.1 (Lean 4): **64.0%**; ARC-AGI-1: **86.7%**; OTIS Mock AIME 2024–25: **98.89%**; PLCC History **96%** / Grammar **93%**; MysteryMechanism: **19.4%**; BioMysteryBench: **61.5%**
- LiveBench: **72.0%** (max, #49/103); Vals Index: **58.5** (unranked) / v2.1 **51.2** (#24/37); TheAggregate Unified ELO: **1819±7** (#49/1636, 494 results)

Coding (beyond DeepSWE):

- Terminal-Bench 2.1: **73.0%** (Vals, max) — fills the gap (vs GPT-5.6 Luna's 80.9%: setup-dependent); Vibe Code Bench v1.1: **81.7%** (max, with tools, #16/63); FrontierCode 1.1: **42.4%** (Cognition, codex harness); APEX-SWE: **38.8%**; Code Migration: **42.5%**; IOI (Vals v2): **55.6%**; Program Bench: **0.5%**; SvelteBench: **100%**; WeirdML v3: **0.079**; Terminal-Bench-Science 0.1: **4.3%** (Vals)
- Terminal-Bench 4.0: **13.64%** (Vals, max) / **13%** (AA) / **16.4%** (vendor-reported) — conflict cluster
- AA Coding Agent Index: **41** (max, Codex harness — regressed 2 points from GPT-5.6 Luna's 43; SWE-Atlas-QnA 44% vs 49%, DeepSWE 64% vs 66% on AA's run)
- SWE-bench Pro / Verified and LiveCodeBench: no verified public score found for Luna

Long context / multimodal:

- 1.05M window (922K max input per API docs) with 90%-off cached reads; AA-LCR: **83.3%** (max, #11/17); MLCR-AA: **93.75%** (TheAggregate)
- Factuality (internal, de-identified flagged conversations): Luna at higher effort matches GPT-5.6 Sol at about a hundredth of the cost; vendor-reported factual error rate **7.6%** (down from GPT-5.6 Luna's 8.5%)
- Chartography: **29.1%** (vendor-reported, #12/12 — a weak documents/charts vision read)

### Normalized scores (1–100)

- **Tool use: 72/100.** DeepSWE v1.1 66.6% (max — "comparable to Claude Opus 5 and Fable 5 at medium effort"), FrontierCode 1.1 42.4% (Cognition), EMB 68.5%, Coarena 80.4% and a community Codexometer 3/3 pass lead; OSWorld 2.0 at 52.7% (vendor-reported) is mid, and Agents' Last Exam at 25.0% (Snorkel, independent — a real 5.3pp regression vs GPT-5.6 Luna's 30.3%) and LMArena Agent at 1.7% (#22 of 46) cap the score.
- **Reasoning: 76/100.** GPQA Diamond 90.5% (Epoch AI, max) is frontier-tier, with FrontierMath Tier 4 v2 56.1%, FrontierMath v2 78.9%, ARC-AGI-1 86.7%, OTIS Mock AIME 98.89% and ProofBench 64.0% strong; HLE 38.5% (AA run, max), ARC-AGI-2 59.3%, the AA Intelligence Index of 37–38.1 (max) and Arena text 1444 are mid, and ARC-AGI-3 at 0.2–0.59% is very weak. Revised 73→76 on the GPQA Diamond 90.5% and FrontierMath fills.
- **Context window: 95/100.** 1.05M-token window (128K out) with 90%-off cached reads; no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 76/100.** Vibe Code Bench v1.1 81.7% (#16/63), Terminal-Bench 2.1 73.0% (Vals, max), DeepSWE v1.1 66.6% (max; AA's independent Codex-harness run: 64%), ProofBench 64.0%, IOI 55.6%, SciCode 54.6% and the Arena coding Elo of 1511 (#53 of 405) support, with the community Codexometer 3/3 pass; FrontierCode 1.1 42.4%, APEX-SWE 38.8%, Code Migration 42.5%, the AA Coding Agent Index of 41 (regressed 2 points) and Terminal-Bench 4.0 at 13–16% lag; SWE-bench Pro/Verified and LiveCodeBench for Luna were not published. Revised 74→76 on the TB 2.1 73.0% and Vibe Code 81.7% fills.
- **Cost efficiency: 96/100.** $0.10/$0.50 per 1M (blended ~$0.18/M at 3:1) with 10%-of-input cache reads ($0.01/M) and half-rate Batch/Flex ($0.05/$0.25) sits just under the ~$0.10/$0.20≈97–99 anchor; the >272K repricing (2× input/cache, 1.5× output) is the caveat, and DeepSWE tasks cost 93–96% less than Opus 5/Fable 5 per task.
- **Overall Score: 77/100.** (72+76+95+65+76)/5 = 76.8 → 77 — a sub-$0.50-output tier with solid DeepSWE (66.6%), GPQA Diamond (90.5%) and Vibe Code (81.7%) at $0.10/$0.50, held back by Agents' Last Exam (25.0%), ARC-AGI-3 (0.2%) and LMArena Agent (1.7%). Revised 76→77 on the Reasoning and Coding revisions.

---

## Update 2026-10-08 (6-day re-research)

Artificial Analysis v4.3.2 component breakdown found (fills several Luna-only gaps):

- Intelligence Index ladder (v4.3.2): Max **38**, Xhigh 35, High 33, Medium 30, Low 22, Non-reasoning 18 (#25 of 696 models at Max; 127 tok/s at Max, 0.87s TTFT non-reasoning, $0.0045/task at Low)
- Component reads at Max: AA-Briefcase 1336, GDPval-AA v2.1 1437, AutomationBench-AA **53%**, Terminal-Bench 4.0 13%, SciCode **55%**, HLE 39%, GDP.pdf 23%, CritPt 19%, AA-Omniscience **+1**, AA-LCR **83%**
- vs GPT-5.6 Luna (Max): Intelligence 38 vs 37; AutomationBench-AA 53% vs 50%; TB 4.0 13% vs 12%; SciCode 55% vs 54%; HLE 39% vs 39%; GDP.pdf 23% vs 24%; CritPt 19% vs 21%; AA-Omniscience +1 vs −10; AA-LCR 83% vs 84% — a small step up on most components, a small step down on GDP.pdf/CritPt/AA-LCR
- **AA-LCR 83% (max) fills the long-context retrieval gap** on file ("no MRCR/RULER/AA-LCR figure captured"); SciCode 55% fills a coding gap
- Still absent for Luna specifically: SWE-bench Pro/Verified, Terminal-Bench 2.1, LiveCodeBench, AA Coding Index, GPQA Diamond, FrontierMath, MMMU
- **Coding revised 73→74** (AA-SciCode 55% at the frontier reference); Overall unchanged at 76 ((72+73+95+65+74)/5 = 75.8)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Revised: Reasoning 73→76, Coding 74→76, Overall 76→77** — Tool 72 / Context 95 / Multimodal 65 / Cost 96 unchanged. This pass filled most of the "not published for Luna" gaps via LLMLearner's 44-result table, LLMReference/Epoch AI rows, Snorkel's Agents' Last Exam board, Vals's Terminal-Bench runs, TheAggregate's 494-result index and the AA launch analysis:

- **Fills (independent where noted):** GPQA Diamond **90.5%** (Epoch AI, Inspect harness, max); FrontierMath Tier 4 v2 **56.1%** / FrontierMath v2 **78.9%** (Epoch AI); Terminal-Bench 2.1 **73.0%** (Vals, max); Vibe Code Bench v1.1 **81.7%** (#16/63); FrontierCode 1.1 Main **42.4%** (Cognition, codex harness, mean@5); Agents' Last Exam **25.0%** (Snorkel, Codex — a real 5.3pp regression vs GPT-5.6 Luna's 30.3%); OSWorld 2.0 **52.7%** (vendor-reported from launch charts); AutomationBench 1.0.6 **20.7%** (Zapier, vendor) vs AutomationBench-AA **53%** (AA — different benchmark, conflict kept); AA-LCR **83.3%** (#11/17); MLCR-AA **93.75%**; LiveBench **72.0%**; Vals Index **58.5** / v2.1 **51.2**; EMB **68.5%**; Finance Agent v2 **49.9%**; Public Benefits Bench **57.6%**; SAGE **48.1%**; Tax Agent Bench **58.9%**; Legal Research Bench **30.3%**; Harvey's Legal Agent **2.9%**; APEX-SWE **38.8%**; Code Migration **42.5%**; IOI **55.6%**; ProofBench **64.0%**; ARC-AGI-1 **86.7%**; OTIS Mock AIME **98.89%**; PLCC History **96%** / Grammar **93%**; BioMysteryBench **61.5%**; MysteryMechanism **19.4%**; Chartography **29.1%** (vendor); SvelteBench **100%**; Program Bench **0.5%**; WeirdML v3 **0.079**; TheAggregate Unified ELO **1819±7** (#49/1636).
- **Conflict clusters:** DeepSWE v1.1 **66.6%** (vendor) vs **64%** (AA's independent Codex-harness run — down from GPT-5.6 Luna's 66%); Terminal-Bench 4.0 **13.64%** (Vals, max) / **13%** (AA) / **16.4%** (vendor-reported); AutomationBench **20.7%** (Zapier) vs **53%** (AA's AutomationBench-AA).
- **AA launch analysis (2026-09-22):** Coding Agent Index **41** (max, Codex harness — regressed 2 points from GPT-5.6 Luna's 43; SWE-Atlas-QnA 44% vs 49%, DeepSWE 64% vs 66%); AA-Omniscience hallucination rate 93%→**77%** but accuracy flat at 44% (fewer attempted answers — the "Omniscience illusion"); GDPval-AA v2.1 **−75 Elo** and AA-Briefcase v1.1 **−45 Elo** vs the predecessor, driven by reduced presentation quality and deliverables omitting rubric elements; cost per Intelligence Index task **$0.07** at max (~60% less than GPT-5.6 Luna's $0.18) on 51k output tokens (up from 41k — more verbose); effort ladder 37/34/32/29/21/18 (max→non-reasoning) with a 15× cost spread ($0.07→$0.0045/task); 166.9 tok/s at max, 0.73s TTFT non-reasoning, 150M output tokens per Index run (vs 86M median).
- **October ChatGPT release (Deployment Safety Hub, 2026-10-07/08 — distinct from the September Codex/Work release):** High capability in Cybersecurity and Biological/Chemical, below High in AI Self-Improvement; statistically significant regressions for Luna (October) on standard self-harm, gore and sexual content (plus age-restricted content and emotional reliance vs GPT-5.6); highly robust to prompt injection (GPT-Red); MentalHealthBench **51.73±0.96** (up from 45.11); bio evals: Tacit Knowledge cons@32 **94.00%**, TroubleshootingBench **41.46%**, ProtocolQA **34.57%**, Virology troubleshooting **48.13%**; cyber evals: ExploitBench **44.66%** and SEC-Bench Pro **48.50%** at max (vs Sol's 82.62%/68.85%, Astra's 85.4%) — Luna underperformed Sol on all High-capability evaluations.
- **Family position:** 20× cheaper than GPT-6 Astra ($10/$50) and 5× cheaper than GPT-6 Sol ($2/$10); >272K prompts reprice to $0.20/$0.75 (2× input/cache, 1.5× output, billed on the full request); Batch/Flex 50%, Fast 2×; vs GPT-5.6 Luna: HLE 38.5 vs 39.5 (tie), ARC-AGI-2 59.31 vs 59.6 (tie), LiveBench 72.0 vs 73.6 (tie), TB 4.0 13.64 vs 11.62 (tie), TB 2.1 73.03 vs 80.9 (setup-dependent), ALE 25.0 vs 30.3 (real gap); vs GPT-6 Sol: trails on every independent benchmark (HLE 38.5 vs 47.9, LiveBench 72.0 vs 79.3, ALE 25.0 vs 32.2, TB 2.1 73.03 vs 83.15).
- Still open: SWE-bench Pro/Verified, LiveCodeBench, MRCR/RULER at depth, MMMU, and an independent matched-harness OSWorld 2.0 run for Luna.
- Score impact: Reasoning 73→76 (GPQA Diamond 90.5% Epoch + FrontierMath T4 56.1% fills — both frontier-tier); Coding 74→76 (Terminal-Bench 2.1 73.0% Vals + Vibe Code Bench 81.7% fills); Overall 76→77 ((72+76+95+65+76)/5 = 76.8). Tool 72 stands — the new independent rows (ALE 25.0%, a real regression) offset FrontierCode 42.4% and the vendor OSWorld 52.7%; Context 95 stands (1.05M + AA-LCR 83.3% + MLCR-AA 93.75%); Multimodal 65 stands (Chartography 29.1% is a weak cap in the +image-in band); Cost 96 stands.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (OpenAI GPT-6 Sol/Luna launch, OpenAI API docs, OpenAI Deployment Safety Hub, Artificial Analysis, ModelCap, LLMLearner, LLMReference, TheAggregate, TheModelGap, Snorkel, Vals AI, Epoch AI, Cognition, ARC Prize, OrcaRouter, Tabbit, HokAI, Layer3 Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna.md`, using the same headings.
