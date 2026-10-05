# GPT-5.4 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.4`; xhigh reasoning)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (xhigh)
- **Short description:** OpenAI's March 2026 frontier model for professional work, coding, computer use, tool search, and agentic workflows.
- **Provider / access:** OpenAI API (`gpt-5.4`); ChatGPT, API, and Codex. The reviewed official model URL was unavailable, so access details rely on the official announcement and Artificial Analysis.
- **Release / knowledge:** OpenAI announced GPT-5.4 on 2026-03-05. Artificial Analysis reports an August 31, 2025 knowledge cutoff.
- **IDs:** `gpt-5.4`; xhigh is a reasoning-effort configuration.
- **Context window:** Artificial Analysis reports 1M tokens (its FAQ renders this as 1.1M); exact official output limit was not found in the reviewed pages.
- **Modalities:** Text and image input; text output; reasoning and computer use supported. Audio/video are not shown.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $2.50 per 1M input and $15.00 per 1M output tokens, with a 90% cache discount.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- GDPval: **83.0% wins or ties** across 44 occupations (OpenAI GPT-5.4 announcement)
- SWE-Bench Pro (Public): **57.7%** (OpenAI GPT-5.4 announcement)
- OSWorld-Verified: **75.0%** (OpenAI GPT-5.4 announcement)
- Toolathlon: **54.6%** (OpenAI GPT-5.4 announcement)
- BrowseComp: **82.7%** (OpenAI GPT-5.4 announcement)
- Computer-use portal evaluation: **95% first-attempt success** and **100% within three attempts** on about 30K HOA/property-tax portal sessions (Mainstay partner evaluation quoted by OpenAI)
- Artificial Analysis Intelligence Index: **39 estimated**, rank **#51/210** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 2.0: **75.1%** (OpenAI GPT-5.4 announcement, accessed 2026-10-05)
- MCP Atlas: **70.6%** (OpenAI GPT-5.5 comparison table, accessed 2026-10-05)
- Claw-Eval: **60.3%** (Claw-Eval leaderboard, accessed 2026-10-05)
- τ²-bench: **98.9%** (OpenAI, accessed 2026-10-05)
- CyberGym: **79.0%**; APEX-Agents-AA: **33.3%**; ResearchClawBench: **15.3%**; JobBench: **38.9%**; ExploitGym: **6.0%**; ApprenticeBench: **11%**; DeepSearchQA: **73.6%**; Gert Labs: **64.89%** (accessed 2026-10-05)
- GDPval-AA: **1307 Elo / 36.6% normalized** (Artificial Analysis, accessed 2026-10-05)
- Terminal-Bench 4.0 and Tau3-Banking: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **39 estimated** at the 2026-09-24 reading; AA now lists **39.0%** (accessed 2026-10-05) — confirmed, essentially unchanged.
- GPQA Diamond: **92.8%**; HLE **52.1%**, HLE without tools **39.8%** (OpenAI, accessed 2026-10-05); AA-GPQA Diamond 92.0%, AA-HLE 43.7%
- CritPt: **23.4%**; AA-LCR: **82.0%** (Artificial Analysis, accessed 2026-10-05)
- AA-Omniscience Index: **5.8%**; Accuracy: **50.8%**; Hallucination Rate: **91.7%** (Artificial Analysis, accessed 2026-10-05) — a very high hallucination rate.
- ARC-AGI-1: **93.67%** (xhigh, ARC Prize verified); ARC-AGI-2: **74.0%**; ARC-AGI-3: **0.2%** (ARC Prize official leaderboard, accessed 2026-10-05)
- FrontierMath v2 Tiers 1–3: **47.6%**; Tier 4: **27.1%** (Epoch AI, accessed 2026-10-05) — weak hard-math performance.
- HealthBench Professional: **48.1%**; HealthBench Hard: **40.1%**; MedXpertQA (Text) **59.6%** (accessed 2026-10-05)
- AA-IFBench: **73.9%** (Artificial Analysis, accessed 2026-10-05)
- MLCR: **no verified public exact value found**

Coding:

- SWE-Bench Pro (Public): **57.7%** (OpenAI)
- Vibe Code Bench: **67.42%** (Vals AI Vibe Code Bench v1.1, accessed 2026-10-05)
- LiveCodeBench Pro: **87.5%** (Meta Muse Spark comparison chart, accessed 2026-10-05)
- AA Coding Index: **71.0%** (Artificial Analysis, accessed 2026-10-05)
- React Native Evals: **85.3%** (leaderboard, accessed 2026-10-05)
- PostTrainBench v1.1: **19.0%** (public leaderboard, accessed 2026-10-05) — a measured weakness.
- SWE-bench Verified, SciCode, and DeepSWE: **no verified public exact value found**

Long context:

- Artificial Analysis verifies a 1M-token context-window claim.
- AA-LCR: **82.0%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent retrieval result, newly available and strong.

Sources consulted: [OpenAI GPT-5.4 announcement](https://openai.com/index/introducing-gpt-5-4/), [OpenAI GPT-5.5 comparison table](https://openai.com/index/introducing-gpt-5-5/), [OpenAI GPT-5.4 mini/nano announcement](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/), [Artificial Analysis GPT-5.4](https://artificialanalysis.ai/models/gpt-5-4), [BenchLM GPT-5.4](https://benchlm.ai/models/gpt-5-4) (page dated 2026-10-05, carrying the component rows quoted above), [ARC Prize](https://arcprize.org/leaderboard), [Epoch AI FrontierMath](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard), [Vals AI Vibe Code Bench](https://www.vals.ai/benchmarks/vibe-code), and [Claw-Eval](https://claw-eval.github.io/), accessed 2026-10-05. The official model documentation URL was unavailable.

### Normalized scores (1–100)

- **Tool use: 93/100.** Cut from 94 on newly measured evidence. Strong: Terminal-Bench 2.0 **75.1%**, OSWorld-Verified 75.0%, MCP Atlas 70.6%, BrowseComp 82.7%, Toolathlon 54.6%, CyberGym 79.0%, τ²-bench 98.9%, and the 95%/100% portal-completion result. Capped by ExploitGym **6.0%**, ApprenticeBench 11%, ResearchClawBench 15.3%, APEX-Agents-AA 33.3%, and GDPval-AA at only 1307 Elo / 36.6% normalized — the professional-work composite is much weaker than the vendor's 83% wins-or-ties framing suggests.
- **Reasoning: 83/100.** Cut from 86. GPQA Diamond 92.8%, ARC-AGI-1 93.67%, ARC-AGI-2 74.0%, HLE 52.1% (39.8% without tools), HealthBench Hard 40.1% are respectable. But **FrontierMath v2 Tier 4 at 27.1%** (Tiers 1–3 47.6%) is weak for a frontier reasoning model, **ARC-AGI-3 is 0.2%**, CritPt 23.4%, and the **AA-Omniscience Hallucination Rate of 91.7%** with a near-zero Index of 5.8% is a serious reliability problem.
- **Context window: 97/100.** Raised from 95: the 1M context claim is now backed by an independent AA-LCR **82.0%** retrieval result.
- **Multimodal: 78/100.** Raised from 65 on measured evidence: MMMU-Pro **81.2%** (82.1% with Python), ScreenSpot Pro 85.4%, CharXiv 82.8%, MedXpertQA MM 77.1%, SimpleVQA 61.1%, ZeroBench 41.0%, ERQA 65.4%, OfficeQA Pro 53.2%, Design Arena Website 1226 Elo. Still capped — no audio or video input.
- **Coding: 88/100.** Raised from 87: SWE-bench Pro 57.7%, Vibe Code Bench 67.42%, LiveCodeBench Pro 87.5%, AA Coding Index 71.0%, React Native Evals 85.3%. Capped by PostTrainBench v1.1 at **19.0%** and the absence of SWE-bench Verified, SciCode and DeepSWE figures.
- **Cost efficiency: 60/100.** $2.50/$15 pricing is materially cheaper than Opus 5 but still paid and above Flash-tier models.
- **Overall Score: 87.8/100.** (93 + 83 + 97 + 78 + 88) / 5 = 87.8, cost excluded. Best fit: professional computer-use agents and coding workflows where broad tool support matters more than low price.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of OpenAI's official GPT-5.4, GPT-5.5 and GPT-5.4 mini/nano announcements, Artificial Analysis and BenchLM component leaderboards, ARC Prize, Epoch AI FrontierMath, Vals AI Vibe Code Bench, Claw-Eval and CyberGym; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to replace the first pass's missing GPQA/HLE/LCR/CritPt/Omniscience/LiveCodeBench/SciCode/Vibe-Code-Bench rows with measured values, including FrontierMath Tier 4 27.1%, ARC-AGI-3 0.2% and Omniscience Hallucination 91.7% as newly visible weaknesses.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
