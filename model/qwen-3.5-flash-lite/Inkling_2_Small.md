# Qwen 3.5 Flash Lite — findings by Inkling 2 Small

- Source: Alibaba Cloud (`qwen3.5-flash`, snapshot `qwen3.5-flash-2026-02-23`; tracked slug `qwen-3.5-flash-lite`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite (Alibaba; tracked under slug `qwen-3.5-flash-lite`; the folder's claimed Zen route `opencode/qwen-3.5-flash-lite` could not be independently verified in the live OpenCode Console catalog — the vendor model this slug resolves to is `qwen3.5-flash`)
- **Short description:** Alibaba Cloud's high-efficiency MoE Flash tier of the Qwen 3.5 native vision-language family, tuned for high-volume, low-latency multimodal work at ultra-low pricing. Whether "Flash Lite" is a distinct SKU or a Zen-route label for `qwen3.5-flash` could not be settled from public sources — Alibaba documents exactly one Flash model in the Qwen 3.5 line (`qwen3.5-flash`). Flagging as a route-level variant of Qwen3.5-Flash, not a separately released checkpoint.
- **Provider / access:** Alibaba Cloud Model Studio (Singapore / Germany / US-Virginia / Hong Kong international scopes; China Beijing separate pricing). Claimed Zen route `opencode/qwen-3.5-flash-lite` per the folder metadata; OpenRouter serves the same model as `qwen/qwen3.5-flash-02-23` (Chat Completions API). Alibaba's own API is OpenAI-compatible Chat Completions.
- **Release / knowledge:** Snapshot `qwen3.5-flash-2026-02-23`; "Released Feb 25, 2026" per benchable.ai. Knowledge cutoff not publicly stated.
- **IDs:** `qwen3.5-flash` (Alibaba Cloud Model Studio; snapshot `qwen3.5-flash-2026-02-23`); OpenRouter `qwen/qwen3.5-flash-02-23`; folder metadata cites `opencode/qwen-3.5-flash-lite` (unverified)
- **Context window:** 1,000,000 total; max input 991,808 (983,616 in thinking mode); max output 65,536; max chain-of-thought 81,920 — per Alibaba Model Studio docs (verified 2026-11-10)
- **Modalities:** Text, image, video in; text out. Reasoning yes (thinking mode); function calling, structured outputs, web search (Beijing/Singapore/US/Hong Kong scopes — not Frankfurt), context caching supported; fine-tuning not supported (international scopes)
- **Pricing (as of 2026-11-10):** International (Singapore/Frankfurt/Hong Kong): **$0.10 / $0.40** per 1M input/output tokens; China Beijing tiered: $0.029/$0.287 (≤128k input), $0.115/$1.147 (128k–256k), $0.172/$1.72 (>256k–1M); explicit cache creation $0.125/$0.13, cache read $0.01 per 1M. OpenRouter lists $0.065/$0.26. No free tier.
- **Architecture:** Hybrid linear-attention (Gated DeltaNet-style) + sparse Mixture-of-Experts, "Qwen3.5 Medium-class" MoE — awesomeagents.ai reports it aligns with the Qwen3.5-35B-A3B configuration (~35B total / ~3B active); the exact parameter count is not officially published for this API route; proprietary hosted API (no open-weights license stated for this route)

### Raw benchmarks found

Agent / tool use:

- Tool use (function calling / structured outputs): supported per Alibaba Model Studio capability matrix — no verified public agentic benchmark score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (no entry on the AA models index as of 2026-11-10)
- benchable.ai accuracy suite (independent evaluator, small suite): hallucination mitigation **97.1%**, email classification **97.4%**, instruction following **63.6%**; **0.0%** on Coding, General Knowledge, Reasoning, Ethics, Mathematics rows — the suite returns near-zero on every reasoning-heavy row for this model, which is either a genuinely weak result or a harness mismatch; treated as unreliable-low, not as a precise ranking. 88% success rate across 8 benchmarks (benchable.ai, checked 2026-11-10)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found (benchable.ai reports 0.0% on its coding row — see caveat above)

Long context:

- 1M context window claimed and documented by the vendor (991,808 max input); no independent long-context retrieval benchmark (MRCR/RULER) verified for this exact model — "no long-context retrieval reported"

### Normalized scores (1–100)

- **Tool use: 62/100.** Vendor-documented function calling + structured outputs (with reasoning), but zero verified agentic/tool-use benchmark numbers for this model — capped for lack of evidence, not evidence of failure.
- **Reasoning: 52/100.** No GPQA/HLE/AA-Index data; benchable.ai's reasoning/knowledge/math rows all return 0.0% (harness-suspect but unrefuted by any positive public result); hallucination mitigation 97.1% is the only positive knowledge-adjacent signal.
- **Context window: 88/100.** 1,000,000-token window (991,808 max input, 65,536 max output) is vendor-documented and unusual at this price point; capped below top tier only because no independent long-context retrieval measurement exists.
- **Multimodal: 52/100.** Text + image + video input, text out — broader-than-usual input coverage for a Flash-tier model, but no verified multimodal benchmark number found.
- **Coding: 50/100.** No verified SWE-bench/LiveCodeBench/SciCode number; benchable.ai's coding row reports 0.0% (suspect harness, but no contradicting public result). Scored conservatively.
- **Cost efficiency: 96/100.** $0.10/$0.40 per 1M (international) — among the cheapest hosted frontier-class APIs; Beijing tiers go as low as $0.029/$0.287. China-tier > International-tier > OpenRouter variance all extremely cheap; no free tier.
- **Overall Score: 61/100.** Mean of (62 + 52 + 88 + 52 + 50) / 5 = 304/5 = 60.8 → half-up 61. A hyper-cheap 1M-context multimodal Flash tier whose public evidence base is thin; best for high-volume extraction/classification/formatting at volume, not for reasoning- or coding-heavy work until independent benchmarks exist.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (vendor documentation, gateway catalogs, independent evaluator snapshots); scores are normalized 1–100 interpretations, not official vendor scores. Qwen3.5-Flash is evidence for the tracked `qwen-3.5-flash-lite` slug; the folder metadata's route-level distinction could not be verified and is flagged inline, never silently merged into another folder.
- Reference URLs:
  - [Alibaba Cloud Model Studio — qwen3.5-flash (capabilities, context limits, pricing)](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash)
  - [OpenRouter — qwen/qwen3.5-flash-02-23](https://openrouter.ai/qwen/qwen3.5-flash-02-23)
  - [benchable.ai — Qwen3.5-Flash benchmark snapshot](https://benchable.ai/models/qwen/qwen3.5-flash-20260224)
  - [awesomeagents.ai — Qwen3.5-Flash vs Gemini 2.5 Flash-Lite](https://awesomeagents.ai/tools/qwen-3-5-flash-vs-gemini-flash-lite/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
