# GPT-6 Luna — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM now exposes 35 rows and fills the biggest gaps in the first draft: independent **AA-MMMU-Pro 79.7%**, **AA AutomationBench 53.2%** (vs the 20.7% OpenAI-launch figure), AA-AnalystAgent 43.8%, AA Terminal-Bench 4.0 12.6%, AA-Briefcase 1335, GDPR — plus **FrontierMath v2 78.95%/56.10%**, HealthBench Professional 60.8% and AA Intelligence Index 38.1%. **Tool use 70 → 72, Reasoning 76 → 78, Multimodal 68 → 70; Overall 77 → 78.** Context/pricing unchanged (1.05M, $0.10/$0.50).

## Model card

- **Name:** GPT-6 Luna
- **Short description:** The entry-level tier of OpenAI's GPT-6 family, unveiled alongside the updated GPT-6 Sol on 2026-09-22 — priced and tuned for high-volume, latency-sensitive work (chat, classification, extraction) rather than frontier reasoning, with enough headroom at higher effort for lightweight agentic and software-engineering tasks. Not an alias: GPT-6 Astra, Sol and Terra are separate IDs and prices.
- **Provider / access:** OpenAI API `gpt-6-luna` on the Responses API (full tool stack: web/file search, code interpreter, computer use, MCP); Chat Completions supports function calling only at `reasoning_effort` none. Also Azure. Included at no extra cost in ChatGPT Free/Go, subject to limits — the API has no free tier.
- **Release / knowledge:** released 2026-09-22; knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna`; Zen route `opencode/gpt-6-luna`. No Free ID on the evaluated route → cost scored on paid API pricing.
- **Context window:** 1,050,000 tokens (922,000 input headroom) with 128,000 max output.
- **Modalities:** text + image in → text out; reasoning effort none→max; streaming; function calling; structured outputs. No audio/video I/O.
- **Pricing (as of 2026-10-18):** $0.10 in / $0.50 out per 1M; cache reads $0.01 per 1M; ≈$0.20 blended (3:1). Tier-1 API capped at 500 req / 500K tok per minute. Zero-data-retention documented.
- **Architecture:** proprietary; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- OpenAI launch results at max effort: OSWorld 2.0 **52.7%** (offline), Agents' Last Exam **50.9%**, AutomationBench **20.7%**
- Artificial Analysis: AutomationBench **53.2%**, GDPval-AA **1432 Elo / 46.6%**, AA-Briefcase **1335**, AA-AnalystAgent **43.8%**, AA Terminal-Bench 4.0 **12.6%**, Hermes Bench **70.5%**, ExploitGym **11.6%**, GDP.pdf **22.8%**, MazeBench **0%**
- Terminal-Bench (2.x), Tau3-Banking, τ²-bench, Toolathlon, MCP-Atlas, Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE: **38.5%** (AA-HLE); CritPt **19.4%**; AA-LCR **83.3%**; MLCR-AA **16.1%**
- ARC-AGI-1 **86.67%**, ARC-AGI-2 **59.3%**, ARC-AGI-3 **0.1%** (ARC Prize)
- FrontierMath v2 (Tiers 1–3) **78.95%** / (Tier 4) **56.10%** (Epoch AI)
- Artificial Analysis Intelligence Index **38.1%**; AA-Omniscience Accuracy **43.8%** / Hallucination Rate **76.7%** / Index **0.7%**
- HealthBench raw **50.0%**, length-adjusted **54.5%**, Professional **60.8%**, Hard **31.4%**
- Factual error rate **7.6%** at max effort (down from GPT-5.6 Luna's 8.5%, OpenAI); AA flags a ~75-Elo GDPval-AA v2.1 regression vs GPT-5.6 Luna
- GPQA Diamond / AIME / MMLU-Pro: no verified public score found (OpenAI published no traditional academic scores)
- BenchLM overall **66.56/100, #32 of 956**

Coding:

- DeepSWE 1.1 **66.6%** and FrontierCode 1.1 **42.4%** (OpenAI, max effort); AA-SciCode **54.6%**
- Bug Hunt Bench **18.3 fixes**; SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench: no verified public score found
- Speed: 157 output tok/s (HokAI/AA); 71 tps at 3.27 s P50 on OpenAI's OpenRouter endpoint

Multimodal / long context:

- AA-MMMU-Pro **79.7%** (Artificial Analysis) — the first vision score for this ID.
- AA-LCR 83.3% is the long-context retrieval signal (below the 95%+ frontier reference).

### Normalized scores (1–100)

- **Tool use: 72/100.** AA AutomationBench 53.2%, Agents' Last Exam 50.9%, OSWorld 2.0 52.7%, AA-AnalystAgent 43.8% and GDPval-AA 1432 Elo sit mid-to-upper band; capped by the OpenAI AutomationBench 20.7% harness conflict, GPT.pdf 22.8%, and no Terminal-Bench/Tau3/MCP/Claw rows.
- **Reasoning: 78/100.** HLE 38.5%, CritPt 19.4%, AA-LCR 83.3%, ARC-AGI-2 59.3% and notably strong FrontierMath v2 78.95/56.10; capped by AA Intelligence Index 38.1%, a 76.7% omniscience hallucination rate and no GPQA/AIME.
- **Context window: 94/100.** 1.05M input (922K headroom) / 128K output is the ≥1M tier floor (retrieval good but unsaturated).
- **Multimodal: 70/100.** Text + image in → text only; now supported by AA-MMMU-Pro 79.7% (top of the +image band); no audio/video.
- **Coding: 78/100.** DeepSWE 66.6% and SciCode 54.6% are strong for a budget tier; capped by FrontierCode 1.1 42.4% and no SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 97/100.** $0.10/$0.50 with $0.01 cache reads (≈$0.20 blended) is in the ~$0.10/$0.20 = 97–99 zone, plus free consumer usage — the cheapest non-stealth API entry in the batch.
- **Overall Score: 78/100.** (72 + 78 + 94 + 70 + 78) / 5 = 78.4 → **78**. Best fit: high-volume chat, extraction and classification with OpenAI's full tool stack at near-zero cost — step up to Sol/Astra for frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18 (UTC)
- Method: public internet research (OpenAI GPT-6 Luna/Sol launch post + GPT-6 Astra system card via BenchLM `gpt-6-luna` — 35 rows —, Artificial Analysis, ARC Prize, Epoch AI; plus the first draft's HokAI/OpenRouter rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
