# Claude Sonnet 3.5 — findings by LongCat 2.5 Preview

- Source: Anthropic/Claude 3.5 Sonnet (`opencode/claude-sonnet-3.5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet
- **Short description:** Anthropic's 2024 balanced-tier model that set SOTA on real-world coding benchmarks at launch. Now superseded by Sonnet 4.6/5/5.5 but still capable for everyday work.
- **Provider / access:** Anthropic API `claude-3-5-sonnet-20241022`; Claude.ai. Chat Completions API.
- **Release / knowledge:** 2024-06-21 (original), 2024-10-22 (v2)
- **IDs:** `opencode/claude-sonnet-3.5` (Zen Free ID exists)
- **Context window:** 200,000 tokens
- **Modalities:** Text, image in; text out; reasoning no (non-reasoning model); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $3/1M input, $15/1M output. Mid-range pricing.
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **49%**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **59.4%**
- MMLU Pro: **73.0%** (or 77% from Artificial Analysis)
- HLE: **4%**
- Intelligence Index: **9.8**
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **49%**
- LiveCodeBench: **38%**
- SciCode: **37%**
- HumanEval+: **81.7%**
- Coding Index: **30.2**
- DeepSWE: no verified public score found

Long context:

- Context window: **200K tokens**
- No long-context retrieval benchmark scores found

Math:

- MATH: **78.3%**
- GSM8K: **91.0%**
- AIME 2025: **23.0%**

### Normalized scores (1–100)

- **Tool use: 50/100.** SWE-bench Verified at 49% was SOTA at launch (2024) but is now mid-tier. Missing Terminal-Bench, Tau3, GDPval, and Claw-Eval scores. Tool calling is supported but agentic performance is dated.
- **Reasoning: 48/100.** GPQA Diamond at 59.4% is mid-tier. HLE at 4% and Intelligence Index at 9.8 are low. MMLU Pro at 73% is decent. Non-reasoning model — no extended thinking capability.
- **Context window: 70/100.** 200K tokens is decent but well below current frontier 1M+ context windows.
- **Multimodal: 65/100.** Text and image input; text output. No video or audio input support.
- **Coding: 52/100.** SWE-bench Verified at 49%, LiveCodeBench at 38%, and SciCode at 37% are all low-mid tier. HumanEval+ at 81.7% is good. Coding Index at 30.2 is mid-tier. Was SOTA at launch but now surpassed by many models.
- **Cost efficiency: 60/100.** $3/$15 per 1M input/output is mid-range. No free tier. Significantly more expensive than current flash/efficient models.
- **Overall Score: 57/100.** Mean of (50 + 48 + 70 + 65 + 52) / 5 = 57. Best-fit recommendation: legacy model — only choose if already integrated; newer Sonnet 4.6/5/5.5 or other current models outperform it at similar or lower cost.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-01
- Method: public internet research (Anthropic docs, Artificial Analysis, BenchLM, Serenities AI, Opper AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
