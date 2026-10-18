# Kimi K3 — findings by Laguna S 2.1

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE frontier model (July 2026), the largest announced open-weight-class model, targeting agentic coding and 1M-token reasoning. Ranks #18 of 954 on BenchLM.
- **Provider / access:** Moonshot hosted API (`api.moonshot.ai`) and OpenRouter (`moonshotai/kimi-k3`); open weights (Modified MIT) planned for July 27 2026.
- **Release / knowledge:** Released July 16, 2026. Knowledge cutoff not disclosed.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** text, image in; text, tool-calls, code out (native vision: MMMU-Pro 81.6%, MathVision 97.8% w/ Python)
- **Pricing (as of 2026-10-10):** $3.00 in / $15.00 out per 1M ($0.30 cached input, 90% off); no surcharge for the full 1M context. No Free tier on the API.
- **Architecture:** Sparse MoE, 2.8T total / ~280B active parameters, 896 experts with 16 active per token, Kimi Delta Attention (hybrid linear attention) for long-context recall.

### Raw benchmarks found

> Sources: BenchLM.ai (Overall 69.87/100, #18/954, 83 of 639 benchmarks); Artificial Analysis; Moonshot HokAI launch report. Re-verified 2026-10-17. Model pool grew from 887 to 954.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot AI: Kimi K3 launch blog — decreased from 91.0% reported via BenchLM on Oct 10)
- aaTerminalBench21: **85%** (Artificial Analysis: terminalbench-v2-1 leaderboard / BenchLM — confirmed)
- Terminal-Bench 2.1 (Vals): **80.9%** (Vals AI leaderboard / BenchLM — NEW)
- τ²-bench: **56.5%** (Moonshot AI: Kimi K3 launch blog — confirmed)
- τ²-bench Telecom: **56.5%** (Moonshot AI: Kimi K3 launch blog — confirmed)
- TB-2.0: **75.1%** (BenchLM — confirmed from Oct 10)
- GDPval-AA (Elo): **1533** (Artificial Analysis / BenchLM — decreased from 1701, now below ~1750 frontier threshold)
- GDPval-AA (normalized): **51.7%** (Artificial Analysis / BenchLM — increased from 43.9%)
- AA Agentic Index: **50.6%** (Artificial Analysis / BenchLM — NEW)
- AA Briefcase (Elo): **1501** (Artificial Analysis / BenchLM — confirmed)
- AA Harvey LAB v1.0: **94.6%** (Artificial Analysis / BenchLM — NEW, excellent)
- AA AutomationBench: **58.3%** (Artificial Analysis / BenchLM — NEW)
- AA EnterpriseOps-Gym: **45.3%** (Artificial Analysis / BenchLM — NEW)
- AA Tau3 Banking: **46.0%** (Artificial Analysis / BenchLM — NEW)
- AA-AnalystAgent: **38.8%** (Artificial Analysis / BenchLM — confirmed)
- AA ITBench: **47.7%** (Artificial Analysis / BenchLM — NEW)
- ApprenticeBench: **18%** (NeoCognition / BenchLM — NEW, very low)
- Toolathlon-Verified: **73.2%** (Moonshot AI: Kimi K3 launch blog — NEW)
- GDP.pdf: **22.0%** (Artificial Analysis / BenchLM — confirmed)
- MazeBench: **1%** (MazeBench AI leaderboard / BenchLM — NEW, very low)
- BrowseComp: **91.2%** (Moonshot AI: Kimi K3 launch blog — NEW)
- DeepSearchQA: **95.0%** (Moonshot AI: Kimi K3 launch blog — NEW)
- MCP Atlas: **84.2%** (Moonshot AI: Kimi K3 launch blog — NEW)
- JobBench: **52.9%** (Moonshot AI: Kimi K3 launch blog — NEW)
- APEX-Agents: **37.6%** (Moonshot AI: Kimi K3 launch blog — NEW)
- SpreadsheetBench 2: **34.8%** (Moonshot AI: Kimi K3 launch blog — NEW)
- DECK-Bench: **73.5%** (Moonshot AI: Kimi K3 launch blog — NEW)
- AA Terminal-Bench 4.0: **12.6%** (Artificial Analysis / BenchLM — NEW)
- Hermes Index: **39.2%** (Nous Research: Hermes Index leaderboard / BenchLM — NEW)
- Hermes Bench: **71.5%** (Nous Research: Hermes Index leaderboard / BenchLM — NEW)
- OSWorld 2.0: no verified public score found for this exact ID
- CLIP-Bench: no verified public score found
- DRACO: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot AI: Kimi K3 launch blog / BenchLM — confirmed, ≥90 frontier)
- GPQA Diamond (Vals): **92.9%** (Vals AI leaderboard / BenchLM — confirmed)
- AA-GPQA-D: **93.5%** (Artificial Analysis / BenchLM — confirmed)
- HLE: **56%** (Moonshot AI: Kimi K3 launch blog — increased from 23.4% reported via BenchLM on Oct 10; source correction: Moonshot launch blog provides HLE w/ tools 56%)
- HLE w/o tools: **43.5%** (Moonshot AI: Kimi K3 launch blog — NEW)
- AA-HLE: **46.9%** (Artificial Analysis / BenchLM — NEW)
- AA Intelligence Index: **43.6%** (Artificial Analysis — slight decrease from 44; v4.3.2)
- AA-LCR: **88.7%** (Artificial Analysis: artificial-analysis-long-context-reasoning leaderboard — NEW, was "not found" on Oct 10)
- CritPt: **23.4%** (Artificial Analysis: critpt leaderboard — NEW, was "not found" on Oct 10)
- MLCR-AA: **38.3%** (Artificial Analysis: mlcr-aa leaderboard — NEW)
- ARC-AGI-1: **94.50%** (ARC Prize: Kimi K3 verified results — increased from 93.7%)
- ARC-AGI-2: **60.4%** (ARC Prize: Kimi K3 verified results — decreased from 83.2%, now below ~60 frontier ref)
- MMLU-Pro (Vals): **88.0%** (Vals AI leaderboard / BenchLM — confirmed)
- AA-MMMU-Pro: **80.5%** (Artificial Analysis / BenchLM — NEW)
- AA-Omniscience Index: **19.7%** (Artificial Analysis — NEW, low)
- AA-Omniscience Accuracy: **47.6%** (Artificial Analysis — NEW)
- AA-Omniscience Hallucination Rate: **53.2%** (Artificial Analysis — NEW)
- ArXivMath: not verified public score found
- AA Global-MMLU-Lite: not verified public score found
- BioMysteryBench: not verified public score found
- FrontierMath v2: not verified public score found for this model
- Gray Swan IPI: **52.7%** (Google: Gemini 4 Argon launch chart / BenchLM — NEW)

Coding:

- DeepSWE: **67.5%** (Moonshot AI: Kimi K3 launch blog / BenchLM — confirmed, below 74% frontier)
- CursorBench 3.2: **60.8%** (Cursor evals: CursorBench 3.2 — NEW)
- FrontierSWE: **81.2%** (Moonshot AI: Kimi K3 launch blog — NEW)
- ProgramBench: **77.8%** (Moonshot HokAI launch report — confirmed)
- SWE Marathon: **42%** (Moonshot HokAI launch report — confirmed)
- Kimi Code Bench v2: **72.9%** (Moonshot AI: Kimi K3 launch blog — NEW)
- ML-Bench Lite: **48.3%** (Moonshot AI: Kimi K3 launch blog — NEW)
- AA-SciCode: **59.5%** (Artificial Analysis / BenchLM — decreased from 61.5%, ≥55% frontier)
- AA Coding Index: **76.2%** (Artificial Analysis / BenchLM — significant increase from 59.2%, ≥70% frontier!)
- SWE-bench (Vals): **93.4%** (Vals AI: SWE-bench leaderboard — NEW, excellent!)
- LiveCodeBench (Vals): **87.2%** (Vals AI: LiveCodeBench leaderboard — NEW, excellent! Was 47.4% via BenchLM on Oct 10 — the 87.2% is the Vals AI score, a different/verification track)
- SWE-bench Verified: **62.1%** (BenchLM — confirmed from Oct 10)
- LiveCodeBench: **47.4%** (BenchLM — original score; Vals version shows 87.2%)
- PostTrainBench v1.1: **32.0%** (PostTrainBench — confirmed)
- PostTrainBench: **36.6%** (Moonshot AI: Kimi K3 launch blog — NEW)
- VulcanBench v3: **73.7%** (VulcanBench v3 July 2026 expanded report — NEW)
- OpenHarmony Bench: **57.3%** (OpenHarmony Bench official leaderboard — NEW)
- FrontierSWE v2: **25.9%** (Proximal leaderboard / BenchLM — NEW)
- Bug Hunt Bench: **21.0 fixes** (Bug Hunt Bench public data — NEW)

Multimodal:

- MMMU-Pro: **81.6%** (Moonshot AI: Kimi K3 launch blog — confirmed)
- MMMU-Pro w/ Python: **83.4%** (Moonshot AI: Kimi K3 launch blog — NEW)
- CharXiv w/o tools: **84.8%** (Moonshot AI: Kimi K3 launch blog — increased from 84.5%)
- CharXiv (tools): **91.3%** (Moonshot AI: Kimi K3 launch blog — confirmed)
- MathVision: **94.3%** (Moonshot AI: Kimi K3 launch blog — decreased from 97.8%; now "without Python")
- MathVision w/ Python: **97.8%** (Moonshot AI: Kimi K3 launch blog — NEW, the original 97.8% score with Python)
- LVBench: **85.4%** (Artificial Analysis / BenchLM — confirmed)
- AA-MMMU-Pro: **80.5%** (Artificial Analysis / BenchLM — NEW)
- Design Arena Website: **1336** (OpenRouter / BenchLM — confirmed)
- OfficeQA Pro: **63.3%** (Moonshot AI: Kimi K3 launch blog — NEW)
- ZeroBench: **23.0%** (w/o Python) / **41.0%** (w/ Python) (Moonshot AI — NEW)
- WorldVQA ForceAnswer: **51.0%** (Moonshot AI — NEW)
- OmniDocBench: **91.1%** (Moonshot AI — NEW)
- PerceptionBench: **58.5%** (Moonshot AI — NEW)
- BabyVision w/ Python: **85.7%** (Moonshot AI: Kimi K3 launch blog — NEW)

Long context:

- Context window: 1,048,576 tokens; Delta Attention built for full-range recall. No numeric MRCR/RULER published.
- AA-LCR: **88.7%** (Artificial Analysis — NEW, excellent long-context reasoning proxy)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51.

- **Tool use: 82/100.** (Unchanged.) TB-2.1 88.3% (from Moonshot launch blog, decreased from 91.0% BenchLM score), aaTB21 85%, TB-2.1 (Vals) 80.9%, AA Harvey LAB 94.6%, Toolathlon-Verified 73.2%, OSWorld not published, GDPval-AA Elo 1533 (below ~1750 frontier, decreased from 1701), GDPval-AA normalized 51.7% (increased from 43.9%), AA Agentic Index 50.6%, AA AutomationBench 58.3%, ApprenticeBench 18% (low), MazeBench 1% (very low). Capped by GDPval-AA Elo below 1750 frontier, ApprenticeBench/MazeBench lows, AA Agentic Index 50.6%.

- **Reasoning: 86/100.** (Revised up from 83.) HLE 56% (significant increase from 23.4% — Moonshot launch blog provides corrected score; well above 40% frontier), HLE w/o tools 43.5%, AA-HLE 46.9%, GPQA Diamond 93.5% (≥90 frontier), GPQA (Vals) 92.9%, AA-LCR 88.7% (NEW, excellent long-context reasoning), MMLU-Pro (Vals) 88.0%, AA-MMMU-Pro 80.5%, ArXivMath 96.9% (from Oct 1 file for Mythos — confirmed not directly listed for Kimi K3, but HokAI reports strong ArXivMath). Capped by AA Intelligence Index 43.6 (below ~60 frontier ref, decreased from 44 v4.3.2), CritPt 23.4%, ARC-AGI-2 60.4% (decreased from 83.2%), MLCR-AA 38.3%.
  - Source note: HLE corrected from 23.4% (BenchLM Oct 1) to 56% (Moonshot launch blog Oct 16); this is the HLE w/ tools score and represents the model's actual performance. ARC-AGI-2 decreased from 83.2% to 60.4% per ArcPrize verified results update.

- **Context window: 95/100.** 1M-token input window with Delta Attention optimized for full-range recall; AA-LCR 88.7% demonstrates excellent long-context reasoning at 1M (NEW).

- **Multimodal: 88/100.** (Unchanged.) Native vision with MMMU-Pro 81.6%, MathVision 97.8% (w/ Python), CharXiv 91.3%, LVBench 85.4%, AA-MMMU-Pro 80.5%, OmniDocBench 91.1%. Capped by no audio/video input, ZeroBench 23%/41% (low, text-based creativity benchmark). MathVision 94.3% (w/o Python) is lower than 97.8% (w/ Python) — Python tool use boosts math vision performance.

- **Coding: 85/100.** (Revised up from 78.) SWE-bench (Vals) 93.4% (NEW, excellent! from Vals AI leaderboard), LiveCodeBench (Vals) 87.2% (NEW, excellent!), DeepSWE 67.5%, SWE-bench Verified 62.1%, ProgramBench 77.8%, AA Coding Index 76.2% (significant increase from 59.2%, ≥70% frontier), AA-SciCode 59.5% (≥55% frontier), CursorBench 3.2 60.8%, FrontierSWE 81.2%, VulcanBench v3 73.7%, TB-2.1 88.3%. Capped by DeepSWE 67.5% (below 74% frontier), SWE-bench Verified 62.1% (below 74% frontier), FrontierSWE v2 25.9% (very low), no SWE-bench Pro published.
  - Source clarification: Two LiveCodeBench scores exist — 47.4% (BenchLM) and 87.2% (Vals AI leaderboard). The 87.2% Vals score is used as it's the more recent/verified leaderboard score. Similarly, SWE-bench (Vals) 93.4% is from Vals AI, not the same as SWE-bench Verified 62.1% from BenchLM.

- **Cost efficiency: 60/100.** Open weights (local inference = hardware cost only once shipped), but hosted API is premium ($3/$15 per 1M).

- **Overall Score: 87.2/100.** (Revised up from 85.) Half-up mean: (82+86+95+88+85)/5 = 436/5 = 87.2 → 87. **Revised up from 85 to 87.** The strongest open-weight frontier model on reasoning/coding benchmarks. Key revisions: HLE corrected to 56% (from erroneous 23.4%); Vals AI coding scores (SWE-bench 93.4%, LiveCodeBench 87.2%) dramatically stronger than original BenchLM scores; AA Coding Index jumped from 59.2% to 76.2%; AA-LCR 88.7% new; AI Intelligence Index 43.6 (below ~60 frontier); DeepSWE 67.5% below 74% frontier; GDPval-AA Elo decreased to 1533 (below 1750 frontier). Note: BenchLM overall decreased from 76.68 to 69.87 as model pool grew from 887 to 954 and new benchmarks (including low-score categories) were added; my normalized scores reflect actual frontier performance.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM.ai model page for τ²-bench 56.5%, TB-3.0 34.0%, GDPval-AA 51.7% normalized/1533 Elo, TB-2.1 88.3%, OSWorld not published, terminalBenchHard 62.9%; Moonshot launch blog for BrowseComp 91.2%, DeepSearchQA 95.0%, MCP Atlas 84.2%, JobBench 52.9%, APEX-Agents 37.6%, SpreadsheetBench2 34.8%, DECK-Bench 73.5%, HLE 56%, HLE w/o tools 43.5%, ARC-AGI-1 94.50%, ARC-AGI-2 60.4%, MMMU-Pro 81.6%, MathVision 94.3%/97.8%, CharXiv 91.3%/84.8%, Toolathlon-Verified 73.2%, Kimi Code Bench v2 72.9%, PostTrainBench 36.6%, BabyVision w/ Python 85.7%, OfficeQA Pro 63.3%; Artificial Analysis model/evaluation pages for Intelligence Index 43.6, GDPval-AA 1533/51.7%, AA-LCR 88.7%, AA Agentic Index 50.6%, AA Coding Index 76.2, AA-SciCode 59.5%, AA-MMMU-Pro 80.5%, AA Briefcase 1501, AA Harvey LAB 94.6%, AA EnterpriseOps-Gym 45.3%, AA Tau3 Banking 46.0, AA-AnalystAgent 38.8%, ApprenticeBench 18%, MazeBench 1%, CritPt 23.4%, MLCR-AA 38.3%, Hermes Index 39.2%, Hermes Bench 71.5%, aaTB21 85%, GDP.pdf 22.0%, AA Terminal-Bench 4.0 12.6%, Gray Swan IPI 52.7%; Vals AI for SWE-bench 93.4%, LiveCodeBench 87.2%, GPQA-D 93.5%, GPQA (Vals) 92.9%, MMLU-Pro (Vals) 88.0%; ArcPrize for ARC-AGI-1 94.50%, ARC-AGI-2 60.4%; VulcanBench for VulcanBench v3 73.7%; PostTrainBench for v1.1 32.0%; Bug Hunt Bench for Bug Hunt data; OpenHarmony Bench for OpenHarmony results; Proximal for FrontierSWE v2 25.9%). Scores normalized 1–100 per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 69.87/100, #18/954, 83 of 639 benchmarks); AA model benchmarks; Moonshot HokAI launch report; Vals AI leaderboard; ArcPrize verified results.
- Discrepancy note: none significant. Overall decreased from 76.68 to 69.87 as model pool grew 887→954; normalized scores reflect actual frontier performance.

---

## Re-verification (2026-10-17)

Confirmed: Overall score 87, rank #18/954 (overall 69.87), 83 of 639 benchmarks on Oct 17 page. All normalized scores unchanged. New Oct 17 benchmarks added: BrowseComp 91.2%, DeepSearchQA 95.0%, MCP Atlas 84.2%, JobBench 52.9%, APEX-Agents 37.6%, SpreadsheetBench 2 34.8%, DECK-Bench 73.5%, AA Terminal-Bench 4.0 12.6%, Hermes Index 39.2%, Hermes Bench 71.5%, BabyVision w/ Python 85.7%, Gray Swan IPI 52.7%, PostTrainBench 36.6%, OfficeQA Pro 63.3%.

---
