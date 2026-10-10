# Kimi K3 — findings by Qwen 3.7 Plus

- Source: Moonshot AI/Kimi K3 (`moonshotai/kimi-k3`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship, released July 16, 2026. Architecture: 896 experts, 16 active per token, using Kimi Delta Attention (KDA) hybrid linear attention. 1M-token input AND output context window — symmetric. Ranked #1 on Frontend Code Arena (1,679 Elo). Leads on endurance coding benchmarks: SWE Marathon 42.0% (best-in-class), Program Bench 77.8% (best-in-class), Terminal-Bench 2.1 88.3%. Exceptional multimodal document understanding: OmniDocBench 91.1% (best-in-class), MathVision 94.3%/97.8% (with Python). AA Intelligence Index 57, comparable to Opus 4.8 and GPT-5.5. Open weights released July 27, 2026 — the largest open-weight model at 2.8T parameters. AA-Briefcase Elo 1501–1548 ranks #2 behind Claude Fable 5 on agentic knowledge work. Key caveat: averages 56 minutes per AA-Briefcase task with 83 turns and $10.57 cost per task — among the most expensive to run.
- **Provider / access:** Kimi API; OpenRouter. Paid only. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-07-16 release; open weights released 2026-07-27. Knowledge cutoff not precisely documented.
- **IDs:** `moonshotai/kimi-k3` (Kimi API, OpenRouter). No free OpenCode Zen ID.
- **Context window:** 1,048,576 tokens (1M) input; 1,048,576 tokens (1M) output. Symmetric 1M in/out.
- **Modalities:** Text, image, video, and document in; text out. Reasoning: yes. Tool calls supported. No audio input.
- **Pricing (as of 2026-10-10):** $3.00/$15.00 per 1M input/output tokens. Cache hits: $0.30/M (90% discount). Web search: $0.015/call. Mid-range pricing — 70–80% cheaper than Opus 4.8 ($15/$75) and GPT-5.6 Sol (~$10/$30) on output tokens, but 3–4× more expensive than pre-release leak estimates suggested.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **91.2%** (Moonshot; vs Fable 5 88.0%, GPT-5.6 Sol 90.4%)
- DeepSearchQA: **95.0%** (Moonshot)
- Terminal-Bench 2.1: **88.3%** (Moonshot) / **80.9%** (Vals AI) / **85%** (AA)
- Toolathlon-Verified: **73.2%** (Moonshot)
- MCP Atlas: **84.2%** (Moonshot)
- AutomationBench: **30.8%** (Moonshot; vs Fable 5 29.1%) / **58.3%** (AA)
- JobBench: **52.9%** (Moonshot; vs Fable 5 57.4%)
- APEX-Agents: **37.6%** (Moonshot) / **41.3%** (AA)
- SpreadsheetBench 2: **34.8%** (Moonshot; vs Fable 5 34.7%)
- DECK-Bench: **73.5%** (Moonshot)
- GDPval-AA Elo: **1537** (AA) / **1668** (Moonshot)
- GDPval-AA normalized: **51.8%** (AA)
- AA-Briefcase Elo: **1501** (AA) / **1548** (Moonshot; #2 behind Fable 5's 1574–1583)
- AA Agentic Index: **50.6%** (AA)
- AA Harvey LAB v1.0: **94.6%** (AA — legal agentic)
- AA Tau3 Banking: **46.0%** (AA)
- AA-AnalystAgent: **38.8%** (AA)
- AA ITBench: **47.7%** (AA)
- ApprenticeBench: **18%** (NeoCognition — very low)
- Terminal-Bench 4.0: **12.6%** (AA — latest version, low)

Reasoning / knowledge:

- AA Intelligence Index: **57** (AA; #4 of 189; comparable to Opus 4.8 and GPT-5.5)
- GPQA Diamond: **93.5%** (Moonshot; AA; vs Fable 5 92.6%, GPT-5.6 94.1%)
- HLE (Humanity's Last Exam): **56%** (Moonshot) / **46.9%** (AA) / **43.5%** (HLE-Full; vs Fable 5 53.3%)
- AIME 2025: **96.1%** (Moonshot — near-perfect math reasoning)
- ARC-AGI-2: **60.4%** (ARC Prize — verified; moderate; vs Fable 5 89.2%)
- ARC-AGI-1: **94.5%** (ARC Prize — verified)
- MMLU-Pro: **88.0%** (Vals AI)
- AA-Omniscience Index: **19.7%** (AA — low)
- AA-Omniscience Accuracy: **47.6%** (AA)
- AA-Omniscience Hallucination Rate: **53.2%** (AA — moderate)
- AA-LCR (Long Context Reasoning): **88.7%** (AA — strong)
- MLCR-AA: **38.3%** (AA)
- CritPt (Physics): **23.4%** (AA — low)
- Gray Swan IPI: **52.7%** (Google Gemini 4 Argon chart)

Coding:

- SWE Marathon: **42.0%** (Moonshot; best-in-class; vs Fable 5 35.0%, GPT-5.6 39.0%, Opus 4.8 40.0%)
- Program Bench: **77.8%** (Moonshot; best-in-class; vs GPT-5.6 77.6%, Fable 5 76.8%)
- DeepSWE: **67.5%** (Moonshot; vs GPT-5.6 73.0%, Fable 5 70.0%)
- FrontierSWE: **81.2%** (Moonshot; vs Fable 5 86.6%)
- FrontierSWE v2: **25.9%** (Proximal — low; vs Fable 5 47.0%)
- Terminal-Bench 2.1: **88.3%** (Moonshot)
- CursorBench 3.2: **60.8%** (Cursor evals)
- LiveCodeBench (Vals): **87.2%** (Vals AI)
- SWE-bench (Vals): **93.4%** (Vals AI) / **76.8%** (Moonshot)
- AA Coding Index: **76.2%** (AA)
- AA-SciCode: **59.5%** (AA)
- VulcanBench v3: **73.7%** (VulcanBench)
- Kimi Code Bench v2: **72.9%** (Moonshot)
- sweMarathon: **42.0%** (also listed above)
- Bug Hunt Bench: **21.0 fixes** (Bug Hunt Bench)
- PostTrainBench v1.1: **32.0%** (PostTrainBench)
- Frontend Code Arena: **#1 at 1,679 Elo** (Arena.ai; vs Fable 5 1,631, GPT-5.6 1,618)

Multimodal:

- MathVision: **94.3%** (Moonshot) / **97.8%** (with Python)
- CharXiv: **91.3%** (Moonshot) / **84.8%** (without tools)
- OmniDocBench: **91.1%** (Moonshot; best-in-class; vs Fable 5 89.8%, GPT-5.6 85.8%)
- MMMU-Pro: **81.6%** (Moonshot; AA: 80.5%) / **83.4%** (with Python)
- OfficeQA Pro: **63.3%** (Moonshot)
- BabyVision (with Python): **85.7%** (Moonshot)
- ZeroBench: **23.0%** / **41.0%** (with Python)
- PerceptionBench: **58.5%** (Moonshot)
- WorldVQA ForceAnswer: **51.0%** (Moonshot)
- GDP.pdf: **22.0%** (AA)
- Design Arena Website: **1343** (OpenRouter)

Long context:

- AA-LCR: **88.7%** (AA — strong)
- MLCR-AA: **38.3%** (AA — low)
- BrowseComp (300K context compaction): **91.2%** / **90.4%** (full 1M window)

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 91.2% leads all models. DeepSearchQA 95.0% is exceptional. MCP Atlas 84.2% is strong. AA Harvey LAB 94.6% is excellent for legal agentic work. AA-Briefcase Elo 1501–1548 ranks #2 behind Fable 5. However, ApprenticeBench 18% is very low, AA-AnalystAgent 38.8% is modest, and Terminal-Bench 4.0 12.6% is poor on the latest version. The agentic profile is strong on browsing/search tasks and knowledge work, but weaker on GUI automation and open-ended agent tasks.
- **Reasoning: 78/100.** GPQA Diamond 93.5% is frontier-competitive (between Fable 5 and GPT-5.6). AIME 2025 96.1% is near-perfect mathematical reasoning. HLE 46.9–56% is moderate (Fable 5 leads at 53–55.5%). ARC-AGI-2 at 60.4% is a significant weakness — far behind Fable 5's 89.2% and other frontier models. CritPt 23.4% and MLCR-AA 38.3% are low. AA Intelligence Index 57 is solid (#4 of 189) but trails Fable 5 (64.9) and GPT-5.6 Sol. The reasoning profile is strong on math and knowledge recall but weak on abstract reasoning (ARC-AGI-2).
- **Context window: 92/100.** 1M tokens input AND 1M output — symmetric, matching the largest context windows available. AA-LCR 88.7% is strong. BrowseComp at 90.4% on the full 1M window demonstrates excellent long-context comprehension. The symmetric 1M in/out is a significant advantage for long-document processing, multi-hour agent sessions, and large codebase ingestion. One of the best context window implementations in the dataset.
- **Multimodal: 87/100.** MathVision 94.3% (97.8% with Python) is exceptional. OmniDocBench 91.1% is best-in-class (vs Fable 5 89.8%, GPT-5.6 85.8%). CharXiv 91.3% is excellent. MMMU-Pro 81.6% is competitive. OfficeQA Pro 63.3% is solid. Text, image, video, and document input — broad modality support (no audio). The multimodal profile is a genuine strength, particularly for document-heavy workflows (contract analysis, research papers, invoice extraction). #1 on Frontend Code Arena (1,679 Elo) also demonstrates strong visual-to-code capability.
- **Coding: 85/100.** SWE Marathon 42.0% is best-in-class (endurance coding). Program Bench 77.8% leads all models. Terminal-Bench 2.1 88.3% is top-tier. SWE-bench (Vals) 93.4% is excellent. LiveCodeBench 87.2% is competitive. Frontend Code Arena #1 at 1,679 Elo is a genuine strength. However, DeepSWE 67.5% trails GPT-5.6 (73.0%) and Fable 5 (70.0%). FrontierSWE v2 25.9% is very low (vs Fable 5 47.0%). Bug Hunt Bench 21.0 and PostTrainBench 32.0% are weak. AA Coding Index 76.2% is solid. The coding profile excels at endurance and breadth but trails on deep single-pass repository comprehension.
- **Cost efficiency: 60/100.** $3/$15 per 1M tokens is mid-range — 70–80% cheaper than Opus 4.8 on output, but significantly more expensive than DeepSeek or GLM alternatives. The critical issue: AA-Briefcase data shows $10.57 average cost per task, 56.4 minutes per task, 83 turns, and 120K output tokens — among the most expensive and slowest to run. The $0.30 cached input rate helps for high-cache-rate pipelines (>50% cache → ~$1.65 blended input cost). But for unique-context workloads, the full $3.00 applies. The high turn count and long task duration make effective cost much higher than token pricing suggests.
- **Overall Score: 86/100.** Mean of five quality dims: (86 + 78 + 92 + 87 + 85) / 5 = 85.6. Moonshot AI's largest and most capable model. Key strengths: #1 Frontend Code Arena (1,679 Elo), best-in-class SWE Marathon (42.0%) and Program Bench (77.8%), exceptional multimodal document understanding (OmniDocBench 91.1%, MathVision 94.3%), symmetric 1M context window, open weights (2.8T — largest available). Key weaknesses: ARC-AGI-2 at 60.4% (far behind Fable 5's 89.2%), expensive to run ($10.57/task, 56 min/task), HLE-Full trails Fable 5 by ~10 points, FrontierSWE v2 at 25.9% is low, AA-Omniscience Index 19.7% is low. Best fit for: agentic coding pipelines with long multi-step loops, frontend/UI code generation, document-heavy multimodal workflows, and teams needing open weights for self-hosting or fine-tuning. Not ideal for: single-shot deep repository analysis (DeepSWE), abstract reasoning tasks (ARC-AGI-2), or cost-sensitive high-throughput deployments.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Moonshot AI official announcements, Artificial Analysis, BenchLM, Vals AI, Wan27, Arena.ai, ARC Prize, Proximal, Cursor evals, VulcanBench, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
