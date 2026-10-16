# GPT-5.2 — findings by Cat Jam

- Source: OpenAI / GPT-5.2 (`opencode/gpt-5-2`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** Prior OpenAI flagship for complex professional work (snapshot 2025-12-11, earlier than GPT-5.5/5.6; text/image in, text out, 400K context).
- **Provider / access:** OpenAI API (`gpt-5.2-2025-12-11`), Responses + Chat Completions. Text/image in; text out.
- **Release / knowledge:** Snapshot 2025-12-11 (dated Dec 11); knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.2` (OpenAI)
- **Context window:** 400,000 tokens; max output 128,000. No long-context repricing (under 272K baseline; all under 400K).
- **Modalities:** Text, image in; text out. Reasoning effort none/low/medium/high/xhigh. Tools: web/file search, code interpreter, image gen, MCP, hosted shell, apply patch, etc.
- **Pricing (as of 2026-10-16):** $1.75 / $14 per 1M input/output; cached $0.175; Batch/Flex half. Low cost.
- **Architecture:** Proprietary GPT-5 family. Not open.

### Raw benchmarks found (sampled official comparison tables, Feb–Mar 2026)

- GPQA Diamond: **92.4%** (GPT-5.2 xhigh, Google comparison table)
- HLE no tools: **34.5%** (same table)
- Terminal-Bench 2.0: **54.0%** (GPT-5.2 xhigh)
- SWE-Bench Verified: **80.0%** (same table)
- SWE-Bench Pro: **55.6%** (OpenAI/GPT-5.4 table)
- SWE Multilingual? not needed
- MMMU-Pro? not found
- Coding Agent? not in sampled table

### Normalized scores (1–100)

- **Tool use: 84/100.** (Terminal-Bench 2.0 54.0, SWE-Verified 80.0; GDPval/OSWorld not in sampled table for 5.2 ⇒ cap.)
- **Reasoning: 86/100.** GPQA 92.4, HLE 34.5, MRCR etc absent; good but below late 2026 flagships.
- **Context window: 84/100.** 400K context (smaller than GPT-5.5/5.6 1.05M). No LCR evidence.
- **Multimodal: 78/100.** Text/image in; text out (no audio/video).
- **Coding: 84/100.** SWE-Verified 80.0, SWE-Pro 55.6, TB2.0 54.0.
- **Cost efficiency: 88/100.** $1.75/$14, cache 90% off, prompt pricing very cheap at flagship-class capability.
- **Overall Score: 83/100.** Mean (84+86+84+78+84)/5 = 83.2. Older GPT-5 generation; still efficient value.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs, Gemini DeepMind comparison tables from earlier in session); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
