# GPT-5.6 Luna — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-6-luna`, 35 rows) computes an overall **64.37/100 (#40 of 228)** and re-confirms the prior pass. **No score change.**

> **Re-verified 2026-10-18 — major correction.** The first draft scored this model on sparse, conflicting third-party rows (GPQA 55.3%, HLE 14.2%, SWE-bench 60.2%). BenchLM now exposes 48 rows sourced to OpenAI's own GPT-5.6 launch post and system card, and the picture is much stronger: **GPQA 92.3%** (AA 91.1% / Vals 91.7%), **Terminal-Bench 2.1 84.7%** (Vals 79.0%), **SWE-bench (Vals) 93.0%**, DeepSWE 67.2%, **AA-LCR 83.7%**, **HLE 39.5%**, GDPval-AA 1582 Elo, MMMU-Pro 78.4%. Reasoning 58 → 86, Tool 70 → 86, Coding 65 → 86, Multimodal 62 → 68; **Overall 70 → 84**.

## Model card

- **Name:** GPT-5.6 Luna — the efficiency tier of OpenAI's GPT-5.6 family (GA 2026-07-09), sibling of GPT-5.6 Terra and GPT-5.6 Sol, not an alias of either.
- **Short description:** OpenAI's fastest and cheapest GPT-5.6 tier, aimed at high-volume inference (classification, extraction, routing) and low-latency production loops while remaining a competent agentic coder; the only GPT-5.6 tier on the consumer ChatGPT Free tier.
- **Provider / access:** OpenAI API, ChatGPT on all tiers including Free (rate-limited), Codex, Microsoft Copilot as an explicit selection, and gateway partners. No OpenCode Zen Free ID.
- **Release / knowledge:** GA 2026-07-09; training data current through June 2026.
- **IDs:** `gpt-5.6-luna`. No Zen Free ID exists — the only free access is the consumer ChatGPT Free tier.
- **Context window:** 1,050,000 in / 128K out (BenchLM + curated record); an earlier vendor-page check reported 200K/64K, treated as stale.
- **Modalities:** text + image in; text, tool calls and code out. No audio or video. Reasoning effort none/low/medium/high; `xhigh`/`max`/`pro` stay reserved for Terra and Sol.
- **Pricing (as of 2026-10-18):** listed in the repo record at $0.20 / $1.20 per 1M; a vendor-page check reported $1.00 in / $6.00 out with $0.125 cached input. Paid API only (consumer Free tier excluded from cost scoring).
- **Architecture:** proprietary, GPT-5.6 family architecture; token-efficiency improvements, prompt caching, reasoning persisted across turns, vision + text in. Fastest in the family (~800 ms p50).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI) / **79.0%** (Vals AI); Terminal-Bench 3.0 **14.3%**
- GDPval-AA: **1582 Elo** (OpenAI) / **48.0%** normalized (Artificial Analysis); AA Agentic Index **42.7%**
- BrowseComp **83.3%**, CyberGym **77.9%**, Toolathlon **53.4%**, OSWorld 2.0 **45.6%**, APEX-Agents-AA **35.8%**, ExploitGym **12.4%**, ApprenticeBench **7%**
- Tau3-Banking / MCP-Atlas / Claw-Eval / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI) / **91.1%** (Artificial Analysis) / **91.7%** (Vals AI)
- HLE: **39.5%** (AA-HLE); AA-LCR **83.7%**; CritPt **20.6%**; MMLU-Pro **86.0%** (Vals)
- ARC-AGI-1 **88.00%**, ARC-AGI-2 **59.5%**, ARC-AGI-3 **0.2%** (ARC Prize)
- Artificial Analysis Intelligence Index **51.2%**; AA-Omniscience Accuracy **42.7%** / Hallucination Rate **92.6%** / Index **-10.3%**
- FrontierMath (legacy) **78.6%**; FrontierMath v2 (Tiers 1–3) **78.6%** / (Tier 4) **58.5%**
- HealthBench Professional **55.7%**, HealthBench Hard **32.0%**; BenchLM overall **64.4/100, #40 of 956**

Coding:

- SWE-bench (Vals): **93.0%** (Vals AI); SWE-bench Pro **62.7%** (OpenAI)
- DeepSWE **67.2%**; AA Coding Index **71.5%**; AA-SciCode **53.6%**
- CursorBench 3.2 **61.1%** / 4.0 **35.9%**; FrontierCode 1.1 Extended **55.1%**; VulcanBench v3 **85.5%**

Multimodal / long context:

- MMMU-Pro **78.4%** / w-Python **79.5%** (OpenAI); AA-MMMU-Pro **78.6%**; no audio/video.
- AA-LCR 83.7% is the long-context retrieval signal; the 1.05M window is a listing + one retrieval benchmark, no MRCR/RULER.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 84.7% (Vals 79.0%), GDPval-AA 1582 Elo, BrowseComp 83.3%, CyberGym 77.9% and AA Agentic Index 42.7%; capped by OSWorld 2.0 45.6%, ApprenticeBench 7% and no Tau3/MCP-Atlas/Claw-Eval.
- **Reasoning: 86/100.** GPQA Diamond 92.3%, AA-HLE 39.5%, AA-LCR 83.7%, CritPt 20.6%, MMLU-Pro 86.0% and FrontierMath v2 78.6/58.5; capped by ARC-AGI-2 59.5%, AA Intelligence Index 51.2% and a 92.6% AA-Omniscience hallucination rate.
- **Context window: 95/100.** 1.05M in / 128K out is the ≥1M tier floor (one AA-LCR retrieval result, no depth curve).
- **Multimodal: 68/100.** Text + image in, text out (MMMU-Pro 78.4%, AA-MMMU-Pro 78.6%) — bottom of the +image-in band; no audio/video.
- **Coding: 86/100.** Vals SWE-bench 93.0%, SWE-bench Pro 62.7%, DeepSWE 67.2%, Coding Index 71.5%, SciCode 53.6%; capped below the frontier by DeepSWE 67.2% (ref 74%+) and CursorBench 4.0 35.9%.
- **Cost efficiency: 92/100.** The repo record's $0.20/$1.20 is near the ~$0.60/$2.20 ≈ 92 anchor and 20% of Sol's per-token cost; a conflicting $1.00/$6.00 vendor-check would lower this.
- **Overall Score: 84/100.** (86 + 86 + 95 + 68 + 86) / 5 = 84.2 → **84**. Best fit: high-throughput routing/classification plus genuinely strong agentic coding and reasoning at efficiency-tier prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (OpenAI GPT-5.6 launch post/system card via BenchLM `gpt-5-6-luna` — 48 rows —, Artificial Analysis, Vals AI, ARC Prize, Epoch AI; corrected against the first draft's stale third-party rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
