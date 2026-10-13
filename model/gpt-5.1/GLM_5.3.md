# GPT-5.1 — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.1`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November-2025 reasoning-model refresh between GPT-5 and GPT-5.2 — a generalist "thinking" model since leapfrogged by the 5.2-5.4 generations, but with the **best honesty profile of the 5.x reasoning line** (non-hallucination 48.1% #124) and niche elite rows (MedQA 96.4% #2, CaseLaw 73.4% #2, MMMU 85.4% #1). Second pass resolves the release date (**2025-11-12**), corrects the context window (**400K, not 200K**), and fills the SWE-bench/LCB/Termal-Bench gaps. Base model still served (API catalog verified 2026-08-11; its chat/Codex variants were shut down 2026-07-23, and the 5.1 family was deprecated from Codex/ChatGPT in March 2026).
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); Azure ($1.25/$10.00); **OpenAI Batch API at $0.625/$5.00 (50% off — G2 confirms the batch halving; the OpenRouter row at that rate is the batch tier, 151 tok/s)**. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.1`, $1.07/$8.50).
- **Release / knowledge:** **2025-11-12** (BenchLeader; announced in the API 2025-11-13 — community.openai.com); knowledge cutoff not published.
- **IDs:** `gpt-5.1`; Zen `opencode/gpt-5.1`. No Free ID on Zen.
- **Context window:** **400K tokens** (BenchLeader header + all three provider rows) — the first pass's 200K (BenchLM) was wrong.
- **Modalities:** text and image input, text output; reasoning (high is its best config); tool calls.
- **Pricing (as of 2026-10-12):** $1.25 / $10.00 per MTok standard (Azure; AA blended $3.44/M "among the most expensive"); **Batch API $0.625/$5.00**; Zen $1.07/$8.50 (cached $0.107). 118 tok/s, 32 s first answer at high.
- **Architecture:** proprietary, size undisclosed.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder (best = high **57.9 #156/760**, trend 49→56→63 rising, last measured 2026-10-09). Category scores (high): **Instruction following 71 (best)**, Human preference 65, Long context 65, Knowledge 60, Maths 59, Multimodal 58, Composite 57, Coding 56, Reasoning 53, **Agents & tools 42 (worst)**.

Agent / tool use:

- **Terminal-Bench 2.1 (AA): 52.4% #109** — gap filled; mid. TB 2.0 (Vals) 44.9% #24; TB public board 47.6% #37; **TB Hard: 45.5% #34** — gap filled; good rank
- **MCP Atlas: 50.1% #31** — gap filled; mid. **τ³-Banking: 15.9% #110** — gap filled; weak (τ² 81.9% #114 confirmed solid); **GDPval-AA: 16.3% #177** (weak — confirms the first-pass read)
- DeepResearch Bench 42.8% #33; Poker Agent 1038.6% #8; Vending-Bench 2 1473.4 #49 (weak); Gert Labs 41.24% (retained); Claw-Eval / OSWorld / BrowseComp / Toolathlon: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 87.6% #67 (high) / AA 87.3% #96 / Vals 86.6% #39 — near-but-below the 90% bar on every harness
- HLE: AA **28.5% #153** / Scale-CAIS 23.7% #17 — below the 40% reference; **CritPt 4.9% #149** (very weak); ARC-AGI-2 17.6% #131; SimpleBench 53.2% #41; ARC-AGI-1 72.8% #122
- Math: **AIME (Vals) 93.3% #15; MGSM 93.0% #12**; OTIS 88.6% #76 (high); MathArena Apex 1.0% #35 (weak); **CL-bench 23.7% #2 / CL-bench Life 17.3% #4** (good ranks); FrontierMath v2 31.0% / 12.5% (retained); ForecastBench 58.1% #53; DTBench 90.1% #67
- **Honesty — the line's best: AA-Omniscience non-hallucination 48.1% #124 (high)** (vs GPT-5.2's 18.8% xhigh and 5.3-Codex's 10.8%); accuracy 37.7% #135, index 5.4 #102; SimpleQA 48.0% #31
- AA II 24.7 #163 (confirmed); ECI 149.6 #56; MMLU-Pro 86.4% #41; **MedQA 96.4% #2** (its "where it wins" row); **CaseLaw 73.4% #2**; MedScribe 88.1% #12; LegalBench 85.7% #18; TaxEval 74.9% #25; CorpFin 63.8% #40; MedCode 52.7% #13; HELM: IFEval 93.5% #3, WildBench 86.3% #2, mean 65.6% #33

Coding:

- **SWE-bench Verified — gap filled: Epoch 68.0% #26 (high) / Vals 69.8% #61 / SWE-bench board 66.0% #17** — a solid mid-band for its generation (not absent, as the first pass had it)
- **LiveCodeBench (Vals): 86.5% #21** — gap filled; good. WeirdML 60.8% #47; ALE-Bench 1192.2 #35
- **Vibe Code v1.1: 24.6% #65** (weak — confirmed); SciCode 43.3% #135 (weak); GSO-Bench 13.7% #20; LMArena Coding 1492 #89 / WebDev 1342-1395 #87-105 (weak preference)

Long context:

- **400K window (corrected)**; **AA-LCR 80.0% #75 (high)** — good measured retrieval; LMArena Document 1416 #43; no MRCR/RULER rows.

Multimodal:

- **MMMU 85.4% #1** (validation set); MMMU-Pro: Vals 83.2% #33 / AA 75.5% #94; LMArena Vision 1250 #63; **VPCT 58.7% #7**; SAGE 43.2% #50; VISTA 43.8% #31. Text+image in, text out.

Preference/IF:

- **IFBench 72.9% #45** — IF-71 earned; MultiChallenge 63.4% #8; LMArena preference mid-good (Text 1456 #68, Hard 1477 #71, Multi-turn 1464 #72, Maths 1458 #64); FORTRESS 25.7% #31 (weak safety balance); Mask 86.3% #16

### Normalized scores (1–100)

- **Tool use: 54/100.** Raised from 52: TB 2.1 52.4% #109, TB Hard 45.5% #34, MCP Atlas 50.1% #31 and TB public #37 fill the agentic dossier at mid-band — but τ³ 15.9% #110, GDPval 16.3% #177, and Agents & tools 42 (its worst category) keep it low.
- **Reasoning: 62/100.** Raised from 60: AIME 93.3% #15, MGSM 93% #12, MedQA #2, CL-bench #2 and the line-best honesty (48.1% #124) offset GPQA 86.6-87.6% below-bar, HLE 28.5%, CritPt 4.9%, ARC-AGI-2 17.6%, and AA II 24.7 #163.
- **Context window: 78/100.** Raised from 70: the window is **400K** (BenchLM's 200K was wrong), and measured retrieval is good (AA-LCR 80.0% #75).
- **Multimodal: 70/100.** Raised from 68: MMMU 85.4% #1 and MMMU-Pro 83.2% #33 are strong; VISTA 43.8% #31 and SAGE 43.2% #50 are the caps.
- **Coding: 62/100.** Raised from 50: the "no SWE-bench rows" gap is filled at mid-band (66-69.8%), LCB 86.5% #21 is good, and WeirdML 60.8% #47 solid — capped by Vibe 24.6%, SciCode 43.3%, GSO 13.7%, and weak WebDev preference.
- **Cost efficiency: 76/100.** Raised from 75: the Batch API tier ($0.625/$5.00, 50% off) is a real cost lever at 151 tok/s; standard $1.25/$10 (Zen $1.07/$8.50) remains mid-range.
- **Overall Score: 65/100.** (54 + 62 + 78 + 70 + 62) / 5 = 65.2 → 65, up from 60. Best-fit: the honest transitional generalist — best truthfulness of the 5.x line, strong medical/legal knowledge (MedQA #2, CaseLaw #2), elite MMMU, and now-verified 400K context at batch-discountable prices; still weak on modern agent suites (τ³, GDPval) and open-ended coding, so the 5.2+ line remains the better default.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-01 report (BenchLeader full effort-ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, Scale AI SEAL incl. MCP Atlas and FORTRESS, HELM Capabilities, MathArena, Terminal-Bench public board, Andon Labs; OpenRouter provider rows incl. the 50%-off batch tier; DDG-lite searches — one bot-challenge-blocked query disclosed; the second surfaced G2/chatai.guide/BenchLM OpenAI pricing guides confirming the Batch API 50% halving and the 5.1-family deprecation timeline); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
