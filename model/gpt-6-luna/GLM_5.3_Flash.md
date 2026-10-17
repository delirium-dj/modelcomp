# GPT-6 Luna — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's budget volume tier of the GPT-6 family — "our most efficient model for focused, high-volume tasks" at $0.10/$0.50 per million tokens (roughly half its GPT-5.6 Luna predecessor's prices); the standout of the GPT-6 launch with near-frontier DeepSWE at a fraction of the cost. The 2026-10-11 second pass adds ARC-AGI-2 59.3% (verified), AA Index 38.1 and AA-LCR 83.3%. Trained "with similar methods as GPT-6 Astra."
- **Provider / access:** OpenAI API (`gpt-6-luna`) via Responses and Chat Completions APIs with Batch, Flex, Fast and regional processing; ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu); free/Go users can use GPT-6 Luna in the desktop app. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-22 (same day as GPT-6 Sol); knowledge cutoff May 18, 2026 (verified via OpenAI API docs and Kingy AI launch analysis).
- **IDs:** `gpt-6-luna` (OpenAI API). No Free ID on Zen.
- **Context window:** 1,050,000 total tokens (BenchLM concurs 1.05M); 128,000 max output. Long-context surcharge: requests over 272K input tokens billed at 2x input / 1.5x output rates.
- **Modalities:** text and image input; text output; reasoning yes with six effort settings (none, low, medium — default, high, xhigh, max); tool calls: function calling, web search, file search, computer use; model page also lists structured outputs, code interpreter, image generation, MCP and skills.
- **Pricing (as of 2026-10-11):** $0.10 / $0.50 per 1M in/out; cached input reads $0.01 per 1M (90% discount); cache writes $0.125 per 1M; Batch/Flex 50%, Fast 2x. Paid API; a free desktop-app route exists for ChatGPT Free/Go users (not a developer API free tier).
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1437** (Anthropic Haiku 5.5 launch table, prior pass; AA now lists **1432** — minor 5-point discrepancy, flagged); normalized **46.6–46.9%**
- MazeBench ASCII: **0%** (added 2026-10-16, tools-off run); Hermes Index: **33.9%** / Hermes Bench: **70.5%** (Nous Research — added 2026-10-16)
- AA AutomationBench-AA: **53.2%** (AA, independent — far better than the vendor-chart AutomationBench 20.7% row the 2026-10-08 pass cited; different harness)
- AA-Briefcase: **1336 Elo** (AA); AA GDP.pdf: **22.8%** (AA)
- Agents' Last Exam V1: **50.9%** max ($0.15/task; OpenAI vendor chart); OSWorld 2.0 offline: **52.7%** max; OSWorld 2.1: **48.9%** (Anthropic-reported); AutomationBench 1.0.6: **20.7%** (vendor chart)
- AA Terminal-Bench 4.0: **12.6%** (AA — very weak; consistent with the 16.4% Anthropic-reported row)
- Terminal-Bench 2.1 / Tau3: no verified public score found (OpenAI didn't report Terminal-Bench for Luna)
- ExploitGym: **11.6%** (GPT-6 Astra system card)

Reasoning / knowledge:

- ARC-AGI-1: **86.7%**; ARC-AGI-2: **59.3%**; ARC-AGI-3: **0.1%** (ARC Prize verified results, arcprize.org/results/openai-gpt-6-luna — fills the ARC gap)
- Artificial Analysis Intelligence Index: **38.1** (AA — fills the "no index" gap); AA-HLE: **38.5%** (AA — fills the HLE gap, just under the 40% bar)
- AA-LCR v1.1: **83.3%** (AA — fills the long-context gap; excellent); CritPt: **19.4%**; MLCR-AA: **16.1%** (AA — fills the MLCR gap, weak)
- Factual error rate (lower is better): **7.6%** max ($0.012/prompt; beats GPT-5.6 Sol's best 8.5% at ~1/70th of the cost — OpenAI chart)
- GPQA Diamond: no verified public score found for Luna specifically
- HealthBench: **50.0%** raw / **54.5%** length-adjusted / Professional **60.8%** (raw **61.2%**) / Hard **31.4%** (GPT-6 Astra system card)
- FrontierMath v2 (Epoch AI re-score): **78.9%** Tiers 1–3 / **56.1%** Tier 4 (epoch.ai, added 2026-10-16 — documented inline per repo convention, not averaged with vendor rows; Luna has no vendor FrontierMath row)
- AA-Omniscience: **43.8% accuracy / 76.7% non-hallucination row / 0.7 index** (AA)

Coding:

- DeepSWE v1.1: **66.6%** max ($0.22/task; OpenAI — corroborated by benchlm; near Opus 5 at medium at 93–96% less cost)
- AA-SciCode: **54.6%** (AA — fills the SciCode gap); Bug Hunt Bench: **18.3 fixes** (public data)
- FrontierCode 1.1 Main: **42.4%** max ($0.11/task; OpenAI chart)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found for Luna specifically

Long context:

- AA-LCR 83.3% is the first measured long-context number (excellent); 1.05M window with >272K surcharge; no MRCR/RULER value verified

Multimodal:

- AA-MMMU-Pro: **79.7%** (AA — first measured vision evidence, strong for the band)

### Normalized scores (1–100)

- **Tool use: 72/100.** (Was 66 on the prior pass.) AA AutomationBench 53.2% (independent) replaces the weak vendor-chart row as the operative evidence, with GDPval 1437 corroborated (46.9% normalized) and Briefcase 1336; TB4.0 12.6% and the missing TB2.1 row keep it below 75.
- **Reasoning: 76/100.** (Was 62 on the prior pass.) The evidence vacuum is filled: ARC-AGI-2 59.3% (ARC Prize verified), AA Index 38.1, AA-HLE 38.5% and AA-LCR 83.3% document real mid-frontier reasoning at nano pricing — held under 80 by the missing GPQA, CritPt 19.4% and MLCR 16.1%.
- **Context window: 95/100.** 1.05M tokens maps to the ≥1M tier (95–100) with 128K output; AA-LCR 83.3% is strong measured evidence; the >272K surcharge keeps it off the maximum.
- **Multimodal: 65/100.** Text + image input only with measured MMMU-Pro 79.7% — top of the 60–70 image-in band; no audio/video/PDF input.
- **Coding: 82/100.** DeepSWE 66.6% corroborated and AA-SciCode 54.6% fills the gap; FrontierCode 42.4% and Bug Hunt 18.3 are mid — the cost-adjusted story remains the differentiator; no SWE-bench Verified/LiveCodeBench rows.
- **Cost efficiency: 99/100.** $0.10/$0.50 per 1M with a 90% cache discount ($0.01 cached) is the cheapest frontier-lab model tracked — at the top of the ~$0.10/$0.20 = 97–99 methodology band.
- **Overall Score: 78.0/100.** (Was 74 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (72 + 76 + 95 + 65 + 82) / 5 = 390/5 = 78.0 — raised on the 2026-10-11 second pass as ARC Prize/AA verification converts the thin-evidence reasoning discount into measured mid-frontier performance. Best-fit: high-volume classification, extraction, routing and cheap coding sub-agents where cost per token matters more than frontier capability.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the OpenAI GPT-6 Astra system card + GPT-6 launch post, Artificial Analysis independent boards (LCR/ARC/SciCode/Omniscience/Briefcase) via benchlm.ai, ARC Prize verified results, plus the prior 2026-10-08 pass with per-effort vendor charts; 2026-10-16 re-check: BenchLM 34-row refresh corroborates (MazeBench 0%, Hermes 33.9/70.5%, Epoch FrontierMath v2 78.9/56.1% added; GDPval 1437 vs AA 1432 flagged) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
