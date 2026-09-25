# GPT-6 Astra — findings by Grok 4.5 (xAI)

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (flagship; no free-tier variant)
- **Short description:** OpenAI’s most capable proprietary frontier model (released Sept 2026), optimized for complex end-to-end agentic work including computer use, coding, research, professional document creation, and multi-step workflows. Alias/variant of the GPT-6 family (alongside Sol/Luna).
- **Provider / access:** OpenAI API (`gpt-6-astra`), ChatGPT (Plus/Pro/Business/Enterprise), Microsoft Azure, AWS Bedrock. Supports Chat Completions and Responses API.
- **Release / knowledge:** 2026-09-03 release; knowledge cutoff Apr 30, 2026 (verified via official model card).
- **IDs:** `openai/gpt-6-astra` (no Free ID exists on Zen or equivalent free tiers).
- **Context window:** 1,050,000 total tokens (max input ~922,000; max output 128,000) — verified via OpenAI official model documentation.
- **Modalities:** text + image in; text out; reasoning yes (effort: low/medium/high/xhigh/max); tool calls (including computer use, code interpreter, hosted shell, web/file search, MCP, image generation); structured outputs / JSON mode supported. No audio or video in/out.
- **Pricing (as of 2026-09-25):** $10 / $50 per 1M input/output tokens; cached input $1; cache writes $12.50. Requests >272K input tokens billed at 2× input/cache and 1.5× output for the full request. Batch/Flex at 50%; Fast mode 2×. Paid only (no free tier; enterprise privacy controls apply via API/Azure/Bedrock).
- **Architecture:** Proprietary (params total/active and MoE status not disclosed; closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (Terminal-Bench 4.0: **57.9%** (OpenAI official announcement / vendor tables))
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld 2.0 (offline/partial): **72.6%** (OpenAI official)
- Agents’ Last Exam: **59.3%** (OpenAI official)
- AutomationBench: **41.4%** (OpenAI official)
  Reasoning / knowledge:
- GPQA Diamond: **96.0%** (OpenAI official)
- HLE: **57.2%** (w/ tools; OpenAI official)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **61.2** (v4.1.1, OpenAI-printed / AA; later AA v4.2 ranks second behind Claude Fable 5.1)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (internal hallucination rate reported lower than prior but not public standard)
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 **74.1%** (OpenAI official); AA Coding Agent Index v1.4 **67.0** (OpenAI-printed)
  Long context:
- OpenAI MRCR v2 8-needle 256K-512K: **100.0%**; 512K-1M: **96.3%** (OpenAI official)

### Normalized scores (1-100)

- **Tool use: 82/100.** Strong OSWorld 2.0 (72.6%), Agents’ Last Exam (59.3%), and computer-use leadership; Terminal-Bench 4.0 mid-high (57.9%). Caps below frontier 90+ due to absence of Tau3/GDPval/TB2.1 and AutomationBench still mid (41.4%).
- **Reasoning: 92/100.** GPQA Diamond 96% and FrontierMath Tier 4 ~97.6% are frontier; HLE 57.2% and AA Index ~61 trail some peers. Strong abstract/math saturation (ARC-AGI-3 adapter 99.9% noted with harness caveat).
- **Context window: 98/100.** Verified 1.05M total with excellent retrieval (MRCR 100% at 256-512K, 96.3% at 512K-1M) — near-max tier (≥1M + high retrieval).
- **Multimodal: 65/100.** Text + image input only; text output. No video/PDF-native/audio; solid vision support but not full multimodal.
- **Coding: 88/100.** DeepSWE 74.1% frontier-adjacent; Terminal-Bench 4.0 57.9% solid; AA Coding Index 67. Caps short of 90+ without verified SWE-bench Verified / LiveCodeBench leadership.
- **Cost efficiency: 55/100.** Paid at $10/$50 per 1M (higher than mid-tier peers); efficiency gains on some tasks noted but base rate keeps score mid.
- **Overall Score: 85/100.** Mean of five non-cost dims (82+92+98+65+88)/5 = 85. Best-fit for high-stakes agentic computer-use, long-context professional workflows, and complex coding/reasoning where cost is secondary.

---

## Signature

- Provided by: **Grok 4.5 (xAI/grok-4.5)** — 2026-09-25
- Method: public internet research (OpenAI official model card + announcement tables, Artificial Analysis references, BenchmarkList/BenchLM aggregates, secondary cross-checks); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
