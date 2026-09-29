# GPT-5.5 — findings by Grok 4.6

- Source: OpenAI / GPT-5.5
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI’s 23 Apr 2026 flagship (API 24 Apr): agentic coding, computer use, and knowledge-work model served at GPT-5.4 latency. Distinct from GPT-5.5 Pro ($30/$180) and from the later GPT-5.6 Sol/Terra/Luna family.
- **Provider / access:** OpenAI Responses and Chat Completions APIs `gpt-5.5`; ChatGPT Thinking (Plus/Pro/Business/Enterprise); Codex (Plus through Go, 400K window in Codex). Fast mode in Codex: 1.5× tokens, 2.5× cost.
- **Release / knowledge:** 2026-04-23 ChatGPT/Codex; API 2026-04-24 (https://openai.com/index/introducing-gpt-5-5/). Knowledge cutoff not stated on that post.
- **IDs:** `openai/gpt-5.5`. No OpenCode Zen Free ID found.
- **Context window:** 1M tokens in the API; Codex product window **400K**. Max output not on the launch post (later catalogs often list 128K — treat as unverified here).
- **Modalities:** Text and image in (MMMU-Pro published); computer use / Codex screen-operate; tools; text out. No native audio/video-in scores on the launch card.
- **Pricing (as of 2026-09-29):** **$5 in / $30 out** per 1M; Batch/Flex half; Priority 2.5×. Secondary catalogs: cached ~$0.50; ≥272K prompt tier ~$10/$45 (ARMES / Writingmate — not on the launch post). GPT-5.5 Pro $30/$180. Paid.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI launch, xhigh)
- Terminal-Bench 2.1: **85.6%** (OpenAI GPT-5.6 comparison table, 2026-07-09)
- Tau2-bench Telecom (original prompts, no tuning): **98.0%** (OpenAI)
- Tau3-Banking: **no verified public score found**
- GDPval (wins or ties): **84.9%** (OpenAI); later GDPval-AA v2 **1493.7 Elo** (GPT-5.6 post)
- OSWorld-Verified: **78.7%** (OpenAI)
- OSWorld 2.0: **47.5%** (GPT-5.6 post — different harness/release)
- BrowseComp: **84.4%** (OpenAI)
- MCP Atlas (Scale, Apr 2026 update): **75.3%** (OpenAI)
- Toolathlon: **55.6%** (OpenAI)
- AutomationBench: **12.9%** (GPT-5.6 post)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI)
- HLE no tools / with tools: **41.4% / 52.2%** (OpenAI)
- FrontierMath T1–3 / T4: **51.7% / 35.4%** (OpenAI launch); GPT-5.6 post later lists T1–3 **85.3% / T4 72.5%** for GPT-5.5 — conflicting official tables; **using the 2026-04-23 launch table** as the native scorecard
- ARC-AGI-2 (Verified): **85.0%** (OpenAI)
- Artificial Analysis Intelligence Index v4.1: **54.8** (OpenAI GPT-5.6 post); BenchLM also lists **38.4** on a later composite — using OpenAI-cited **54.8**
- CritPt: **27.1%** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **58.0% / 89.0%** (BenchLM AA-Omniscience)

Coding:

- SWE-Bench Pro (public): **58.6%** (OpenAI launch; labs noted memorization risk); GPT-5.6 post **59.4%**
- Expert-SWE (internal): **73.1%** (OpenAI)
- DeepSWE v1.1: **67%** (OpenAI GPT-5.6 table)
- AA Coding Agent Index: **76.4** (GPT-5.6 post) / BenchLM **74.9**
- AA-SciCode: **55.8%** (BenchLM)
- LiveCodeBench (Vals): **85.3%** (BenchLM)
- Vibe Code Bench: **69.85%** (BenchLM)
- SWE-bench Verified: **no verified official number**; Vals **82.6%** (BenchLM)

Long context:

- OpenAI MRCR v2 8-needle 256K–512K **81.5%**; 512K–1M **74.0%** (OpenAI). Not ≥98% at 512K+.
- GraphWalks BFS 256k / 1M F1: **73.7% / 45.4%** (OpenAI)

Multimodal:

- MMMU Pro no tools / with tools: **81.2% / 83.2%** (OpenAI)
- OfficeQA Pro: **54.1%** (OpenAI)

### Normalized scores (1–100)

- **Tool use: 89/100.** TB 2.0 82.7% and later TB 2.1 85.6% sit just under the ~88%+ frontier ref; Tau2 Telecom 98%, OSWorld-Verified 78.7%, BrowseComp 84.4%, MCP Atlas 75.3% are strong. Caps: GDPval-AA Elo ~1494 (below ~1750), Toolathlon 55.6%, AutomationBench 12.9%, no Tau3/Claw-Eval.
- **Reasoning: 91/100.** GPQA 93.6%, HLE-with-tools 52.2% (no-tools 41.4% still clears the 40%+ ref), ARC-AGI-2 85%. Caps: launch FrontierMath T1–3 51.7% is mid vs later 5.6-era math tables; AA Index 54.8 is strong on v4.1 but not the old 60+ scale.
- **Context window: 96/100.** API 1M maps to 95–100. Not 100: MRCR 512K–1M 74.0% and GraphWalks 1M BFS 45.4%; Codex product cap is 400K.
- **Multimodal: 70/100.** Image in + MMMU-Pro 81.2% and computer-use vision sit at the top of the +image (60–70) band. Caps: no native audio/video-in on the launch card; text-only output.
- **Coding: 86/100.** TB 82.7%/85.6% and DeepSWE 67% are high-mid toward the 74%/85%+ coding-agent refs; Expert-SWE 73.1% is strong internally. Caps: SWE-Pro 58.6% trails Opus 4.7 64.3% on the same table; no official SWE-Verified.
- **Cost efficiency: 48/100.** List $5/$30 matches GPT-5.6 Sol’s original list (between ~$3/$15 ≈60 and $10/$50 ≈30). Flex/Batch 50% off helps batch jobs. No $0 API tier.
- **Overall Score: 86/100.** Mean of 89, 91, 96, 70, 86 = 86.4 → 86 half-up. Best-fit: still-excellent paid 5.x daily driver for Codex/computer-use if you are not on 5.6 Sol; prefer Sol when TB 2.1 / DeepSWE / GDPval-AA Elo are the deciding evals.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-29
- Method: Public internet research (OpenAI GPT-5.5 launch post, OpenAI GPT-5.6 comparison tables, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
