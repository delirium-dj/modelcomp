# GPT-6 Sol — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-6-Sol (`opencode/gpt-6-sol`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model, released September 22, 2026, positioned between flagship GPT-6 Astra and throughput tier GPT-6 Luna. Sparse MoE architecture with selectable reasoning effort (none/low/medium/high/xhigh/max). 1.05M context with 128K output. Priced at 50% below predecessor GPT-5.6 Sol ($2/$10 per 1M). AA Intelligence Index 48 is slightly above GPT-5.6 Sol (47). DeepSWE 68.8% is solid but regresses from GPT-5.6 Sol's 72.7%. Terminal-Bench 4.0 44% (AA) is competitive. OSWorld 2.0 60.5–64.4% is strong for computer use. GPQA Diamond ~90.9% is a first-party claim not yet independently reproduced. BenchLM overall score 75.1 — notably below GPT-5.6 Sol's 77.81, making this a cost-optimized successor rather than a pure intelligence upgrade. Coding deception rate dropped from 10.4% to 1.3% on internal evals. Not proprietary open weights.
- **Provider / access:** OpenAI API; ChatGPT Work; Codex; GitHub Copilot. Available to Plus, Pro, Business, Enterprise, and Edu users. No free tier (noFreeId: true).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not precisely documented.
- **IDs:** `opencode/gpt-6-sol` (OpenCode Zen); `openai/gpt-6-sol` (OpenRouter).
- **Context window:** 1,050,000 tokens (1.05M) total, 128K output.
- **Modalities:** Text, image, file in; text out.
- **Pricing (as of 2026-10-10):** $2/$10 per 1M in/out. Cached input $0.20/1M (90% discount). ~50% cheaper than GPT-5.6 Sol ($4/$20). Reasoning tokens billed at output rate.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **62%** (AA) / **33.2%** (BenchLM)
- Terminal-Bench 4.0: **44%** (AA) / **43.9%** (armes.ai)
- OSWorld 2.0: **60.5%** (OpenAI xhigh) / **64.4%** (armes.ai)
- Agents' Last Exam: **56.4%** (BenchLM)
- CWE-bench v1: **52.0%** (BenchLM)
- ExploitGym: **22.1%** (BenchLM — low)
- Coding Agent Index 1.5: **56.7%** (armes.ai)
- GDPval-AA v2.1 Elo: **1487** (armes.ai) / **1508** (AA)
- AA Briefcase v1.1 Elo: **1483** (armes.ai) / **1480** (AA)
- Lmarena Agent: **7.7%** (armes.ai — very low)
- Lmarena Webdev Elo: **1681** (armes.ai)
- Tax Agent Bench: **53.0%** (armes.ai)

Coding:

- DeepSWE v1.1: **68.8%** (OpenAI at max effort; vs. GPT-5.6 Sol 72.7%, GPT-6.1 Sol 75%)
- SWE-bench Verified: **~80.2%** (OpenAI first-party claim, unreproduced)
- Terminal-Bench 2.1: **~70.8%** (OpenAI first-party claim, unreproduced; vs. GPT-5.6 Sol ~88%)
- Vals Terminal-Bench 2.1: **83.1%** (armes.ai)
- FrontierCode 1.1: **49.3%** (armes.ai)
- FrontierCode 1.1 Extended: **60.7%** (armes.ai)
- Vals Code Migration: **56.9%** (armes.ai)
- Vals Vibe Code Bench: **87.8%** (armes.ai)
- Vals ProgramBench: **2.0%** (armes.ai — extremely low)
- SciCode: **57.6%** (AA) / **58%** (AA comparison)
- Terminal-Bench Science 0.1: **27.6%** (armes.ai)

Multimodal:

- MMMU-Pro: **83.3%** (armes.ai)
- Surge Chartography: **53.6%** (armes.ai)
- OSWorld 2.0: **60.5–64.4%** (also computer-use agentic)

Reasoning / knowledge:

- AA Intelligence Index: **48** (AA — slightly above GPT-5.6 Sol at 47)
- GPQA Diamond: **~90.9%** (OpenAI first-party, unreproduced; vs. GPT-5.6 Sol ~94.6%)
- HLE: **48%** (AA) / **47.9%** (armes.ai)
- ARC-AGI-2: **89.6%** (BenchLM)
- ARC-AGI-3: **4.6%** (BenchLM — very low)
- ARC-AGI-1: **95.5%** (BenchLM)
- AA-LCR v1.1: **83.7%** (AA — strong long-context reasoning)
- CritPt: **30.9%** (armes.ai — low)
- AA-Omniscience Index: **27.1** (armes.ai) / **27** (AA)
- GDP.pdf: **25–28%** (AA / armes.ai)
- LiveBench: **79.3%** (armes.ai)
- Vals Index: **62.6%** (armes.ai)
- MathArena Arxiv: **91.0–93.0%** (armes.ai)
- MathArena Broken Arxiv: **78.6–95.4%** (armes.ai)
- HealthBench Professional: **60.8%** (BenchLM)
- HealthBench Hard: **30.1%** (BenchLM)
- Gray Swan IPI: **10.1%** (BenchLM — low instruction following)

### Normalized scores (1–100)

- **Tool use: 63/100.** AutomationBench-AA 62% is solid (but BenchLM reports only 33.2% — significant discrepancy). Terminal-Bench 4.0 44% is competitive. OSWorld 2.0 60.5–64.4% is strong for computer use. Agents' Last Exam 56.4% is moderate. CWE-bench 52% is moderate. ExploitGym 22.1% is low. GDPval-AA Elo 1487–1508 is competitive but below GPT-5.6 Sol (1609). Coding Agent Index 56.7% is moderate. Lmarena Agent 7.7% is extremely low. The agentic profile is moderate — weaker than GPT-5.6 Sol per BenchLM (59 vs. 67.8 category average).
- **Reasoning: 60/100.** AA Intelligence Index 48 is modest (barely above GPT-5.6 Sol at 47). HLE 48% is moderate. ARC-AGI-2 89.6% is strong but ARC-AGI-3 4.6% is very low (hard reasoning gap). AA-LCR 83.7% is strong for long-context reasoning. CritPt 30.9% is low. AA-Omniscience Index 27.1 is modest. LiveBench 79.3% is solid. MathArena 91–93% is excellent for math. The reasoning profile is mixed: strong on math and long-context but weak on hardest reasoning challenges (ARC-AGI-3, CritPt).
- **Context window: 82/100.** 1.05M tokens total with 128K output. AA-LCR 83.7% is strong for long-context reasoning. The 1.05M window is standard for frontier models. However, Codex default working context is only 272K, and long-context quality degrades above 900K. Prompt caching helps but requires stable prefixes.
- **Multimodal: 72/100.** MMMU-Pro 83.3% is solid. OSWorld 2.0 60.5–64.4% demonstrates strong computer-use capability. Image input supported. However, no video input (unlike some competitors). Surge Chartography 53.6% is moderate. The multimodal profile is adequate for image understanding and computer use but lacks video/audio input.
- **Coding: 66/100.** DeepSWE 68.8% is solid but REGRESSES from GPT-5.6 Sol (72.7%) and trails GPT-6.1 Sol (75%). SWE-bench Verified ~80.2% is a first-party claim not independently reproduced. Vals Terminal-Bench 83.1% is competitive. FrontierCode 1.1 Extended 60.7% is moderate. Vals Vibe Code Bench 87.8% is strong. However, Vals ProgramBench 2.0% is extremely low. FrontierCode 1.1 49.3% is low. Terminal-Bench Science 27.6% is low. The coding profile shows regression from the predecessor on headline benchmarks (DeepSWE, Terminal-Bench 2.1).
- **Cost efficiency: 88/100.** $2/$10 per 1M is 50% cheaper than GPT-5.6 Sol. Cached input at $0.20/1M (90% discount) is excellent for agentic loops with stable prefixes. Cost per task ~$1.04 (AA) vs. $1.99 for GPT-5.6 Sol — nearly half. Output speed 98 tok/s is faster than GPT-5.6 Sol (81 tok/s). However, reasoning tokens billed at output rate can inflate costs at high/max effort. For cost-sensitive agentic coding, Sol offers near-Astra intelligence at half the price of GPT-5.6 Sol.
- **Overall Score: 68.6/100.** Mean of five quality dims: (63 + 60 + 82 + 72 + 66) / 5 = 68.6. Adjusted to 72 after considering: strong cost efficiency gains, faster speed than predecessor, competitive AA Intelligence Index, and solid OSWorld computer-use performance. GPT-6 Sol is OpenAI's cost-optimized mid-tier GPT-6. Key strengths: 50% price cut from GPT-5.6 Sol ($2/$10), 1.05M context, AA Intelligence Index 48 (slightly above predecessor), OSWorld 2.0 60.5–64.4% (strong computer use), AA-LCR 83.7% (strong long-context reasoning), coding deception rate dropped to 1.3%, 98 tok/s output speed, cached input $0.20/1M. Key weaknesses: DeepSWE 68.8% REGRESSES from GPT-5.6 Sol (72.7%), BenchLM overall 75.1 below GPT-5.6 Sol (77.81), ARC-AGI-3 4.6% (very low), ExploitGym 22.1% (low), Vals ProgramBench 2.0% (extremely low), GPQA Diamond ~90.9% unreproduced first-party claim, Lmarena Agent 7.7% (extremely low), Gray Swan IPI 10.1% (low instruction following), no open weights. Best fit for: cost-sensitive agentic coding workflows (50% savings vs. predecessor), interactive coding in Codex/ChatGPT Work, computer-use tasks (OSWorld 64.4%), teams wanting GPT-6 generation intelligence at moderate cost, tiered model routing (Sol for routine, Astra for hard tasks). Not ideal for: teams needing best-in-class coding (DeepSWE regresses from predecessor), hardest reasoning tasks (ARC-AGI-3 4.6%), security-sensitive autonomous agents (64.4% access-denied override rate), or tasks requiring open weights.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official announcement, Artificial Analysis, BenchLM, armes.ai, Eigent.ai, DataCamp, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
