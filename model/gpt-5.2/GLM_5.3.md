# GPT-5.2 — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.2`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December-2025 frontier reasoning/thinking model (released **2026-12-11**… i.e. 11 Dec 2025, confirmed by BenchLeader) — the generalist whose coding capabilities GPT-5.3-Codex then GPT-5.4 built upon. Retired from ChatGPT in June 2026 (Thinking/Instant/Pro left the model picker ~2026-06-05/12 — sources differ by a week; existing conversations migrated to GPT-5.5); **still served on the API, OpenRouter, and Zen** (OpenRouter comparison live 2026-10-05). Sibling of GPT-5.2-Codex and GPT-5.2 Pro.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.2`).
- **Release / knowledge:** 11 Dec 2025; knowledge cutoff not published.
- **IDs:** `gpt-5.2`; Zen `opencode/gpt-5.2`. No Free ID on Zen.
- **Context window:** 400K tokens family tiering (first pass, BenchLM) vs **128K listed by BenchLeader** — conflict retained; official MRCR measurements run to 256K, so ≥128K-served is certain. Scored on the measured envelope.
- **Modalities:** text and image input, text output; reasoning (xhigh in official evals — and xhigh is its best-measured config); tool calls.
- **Pricing (as of 2026-10-12):** $1.75 / $14.00 per MTok in/out (unchanged; BenchLeader blended $4.81/M, "among the most expensive ranked"; 157 s first answer at xhigh — full-effort replies are slow). Zen cached read $0.175. No free tier.
- **Architecture:** proprietary, size undisclosed; cyber safeguards introduced with this generation.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder (best = xhigh **60.8 #97/760**, trend 51→59→67 stable-to-rising, last measured 2026-09-29). Category scores (xhigh): **Instruction following 73 (its best)**, Composite 64, Long context 67, Reasoning 61, Coding 63, Maths 57, Knowledge 57, **Agents & tools 55 (its worst)**.

Agent / tool use:

- **GDPval: 49.7% #1** (OpenAI's own GDPval publication via Epoch) vs the vendor's "70.9% wins-or-ties" — different normalization, both retained
- **Terminal-Bench public board: 64.9% #9** — elite terminal rank (confirms the official 62.2% TB 2.0); TB Hard **47.0% #27** (xhigh); TB 2.0 (Vals) 51.7% #18
- **METR Time Horizons: 75.3% #4** (high) — elite long-horizon agent capability
- **τ²-bench: 84.8% #3** (official board; AA 84.8% #96 in a stacked field) — but **τ³-Banking: 11.1% #136** (new, dreadful — the 2026 successor suite sinks it)
- MCP Atlas **67.6% #23** (better than the official 60.6%); BFCL Overall 55.9% #14; **Poker Agent 1131.8% #1** (Vals); LiveBench Agentic Coding 50.3% #43; DeepResearch Bench 41.1% #35 (low effort); Vending-Bench 2 3591.3 #44; Remote Labor Index **2.5% #10** (weak)
- OSWorld-Verified 47.3% (official, retained — far below 5.4's 75%); BrowseComp 65.8%; Toolathlon 45.7%; Gert Labs 46.54%; JobBench 34.3%; Claw-Eval still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch **91.4% #30** (xhigh) / Vals **91.7% #18** / AA 90.3% #62 — above the 90% bar at full effort
- HLE: AA **37.7% #97** (xhigh — still below the 40% reference) / Scale-CAIS **27.8% #12** (good rank in a crushed field); official 34.5%
- Math: **AIME (Vals) 96.9% #2**; OTIS 96.1% #35; AIME 2026 98.3% #4; HMMT Feb 2026 97.0% #3; MGSM 94.0% #6; LiveBench Math 93.2% #23; **FrontierMath T1-3 67.4% #28 / T4 31.7% #35** (up from the first pass's 40.7/18.8 — the v2 rerun reads better); MathArena Apex 13.5% #18 (weak); ProofBench 15.0% #57 (weak)
- ARC-AGI-1 **94.5% #35** (not stated; 86.2% #93 xhigh); ARC-AGI-2 **72.9% #48** (not stated; 52.9% #95 xhigh — harness-spread conflict retained)
- CritPt **11.6% #102** (weak); SimpleBench 45.8% #53; ForecastBench 60.1% #32; SciPredict 20.6% #6; Kagi 73.3% #18; LMCA 43.9% #78; DTBench 90.9% #61
- **Honesty is the collapse point at full effort: AA-Omniscience non-hallucination 18.8% #285 (xhigh)** vs 38.4% #163 (medium) — more thinking makes it less truthful; accuracy 44.3% #92, index −0.9 #137; SimpleQA Verified 37.1% #45 (weak short facts)
- AA Intelligence Index 30.4 (weak composite); MMLU-Pro 86.2% #44; MedQA 94.1% #19; TaxEval 75.8% #11; CaseLaw 66.0% #8; CorpFin 65.9% #25; LegalBench 82.8% #62; MedScribe 84.4% #33; MedCode 49.8% #18; EBR-bench 23.0% #13
- Preference (not stated config): LMArena Text 1476 #31, **Multi-turn 1495 #15**, Hard 1497 #37, IF 1457 #54, Longer 1472 #57; IFBench **75.4% #31** and LiveBench Language 79.8% #31 back the IF-73 category score

Coding:

- SWE-bench Verified: official 80% vs independent **72.8% #7 (SWE-bench board, bash-only & any-scaffold)** / Epoch 73.8% #17 / Vals 75.8% #41 — harness spread 73–80%, all retained
- **SWE-Bench Pro conflict: Scale SEAL public/private 29.9% #16** vs the official 55.6% — irreconcilable split, both retained
- LiveCodeBench (Vals) **85.4% #31**; LiveBench Coding 76.1% #46; WeirdML **72.2% #30** (xhigh); **AlgoTune 2.0 #1** (elite); GSO-Bench 27.4% #13; Vibe Code v1.1 53.5% #45 (unchanged); ALE-Bench 1293.5 #30; SWE-Lancer IC Diamond 74.6% (official)
- LMArena Coding 1515 #44 (not stated) / WebDev **1416 #78** (weak — old-gen webdev); Terminal-Bench 64.9% #9 doubles as the agentic-coding signal

Long context:

- AA-LCR **82.7% #33** (xhigh — good); LMArena Document 1425 #40; official MRCR v2 8-needle retained (77.0% at 128K-256K, GraphWalks BFS 94.0% 0-128K); no verified rows beyond 256K. BenchLeader Long context category: 67.

Multimodal:

- MMMU-Pro: Vals **86.7% #17** (xhigh) / AA 74.6% #105 (high); **VPCT 84.0% #2** (high — notable); VISTA 46.6% #20 (weak); LMArena Vision 1268 #46; SAGE 49.3% #22; MortgageTax 67.1% #29; first-pass vision rows retained (MathVision 83.0%, CharXiv 82.1%, V* 75.9%). Text+image in only.

### Normalized scores (1–100)

- **Tool use: 68/100.** Lowered from 70: the elite rows (GDPval #1, TB #9, METR #4, τ² #3, MCP Atlas #23) are now balanced against new independent drags — τ³-Banking 11.1% #136, Remote Labor 2.5% #10, OSWorld 47.3%, Vending #44, DeepResearch 41.1% #35. BenchLeader's Agents & tools category: 55, its worst.
- **Reasoning: 70/100.** Held: frontier-class science/math at xhigh (GPQA 91.4-91.7%, AIME #2, FrontierMath ranks up on the v2 rerun, ARC-AGI-1 94.5% #35) vs the confirmed honesty collapse (non-hallucination 18.8% #285 at xhigh), HLE 37.7% #97 under the bar, CritPt 11.6% #102, ProofBench 15.0% #57.
- **Context window: 74/100.** Held: the 400K-family vs 128K-listed conflict is unresolved, but measured retrieval (MRCR to 256K, AA-LCR 82.7% #33, Document #40) anchors the score; no verified rows beyond 256K.
- **Multimodal: 70/100.** Held: Vals MMMU-Pro 86.7% #17 and VPCT #2 are strong; VISTA 46.6% #20, Vision #46, and text-only output cap the band.
- **Coding: 76/100.** Held: LiveCodeBench 85.4% #31 and AlgoTune #1 anchor the band with SWE-bench Verified 73–80% across harnesses — capped by the irreconcilable SWE-Pro 29.9/55.6 split, weak WebDev 1416 #78, and Vibe Code 53.5% #45.
- **Cost efficiency: 63/100.** Held: $1.75/$14 with $4.81/M blended, 157 s first answer at xhigh, and June-2026 ChatGPT retirement — the 5.4/5.5 line is smarter at similar prices; the only value angle left is niche API continuity.
- **Overall Score: 72/100.** (68 + 70 + 74 + 70 + 76) / 5 = 71.6 → 72, unchanged. Best-fit: a retired-from-ChatGPT, still-on-API legacy generalist — elite math/long-horizon agents and instruction following, but weak honesty at full effort and a 2026-agent-suite profile (τ³, Remote Labor) that has moved past it. New deployments should default to GPT-5.4+.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full effort-ladder as of 2026-09-29; Epoch AI Benchmarking Hub; Artificial Analysis; Vals AI; Scale AI SEAL incl. SWE-Bench Pro; LiveBench; LMArena; METR; τ²-bench official; SWE-bench board; MathArena; ForecastBench; DDG-lite searches surfacing macaron/datastudios retirement-timeline coverage, llm-stats and OpenRouter comparisons, and OpenAI's GPT-5.2 prompting guide); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
