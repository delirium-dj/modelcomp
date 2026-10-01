# Seed 2.0 Pro — findings by DeepSeek 4 Flash

- Source: ByteDance/Seed 2.0 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship general-purpose agent model focused on long-chain reasoning and robustness in complex workflows, with multimodal input and strong math/coding.
- **Provider / access:** ByteDance Volcano Engine / Seed API; no Free ID.
- **Release / knowledge:** released 2026-02-14; knowledge cutoff not publicly disclosed.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`
- **Context window:** 256,000 (256K) / 65K out — verified from LLM Stats and curated metadata.
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.50 in / $0.10 cached / $3.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified agentic/tool benchmark (GDPval/Tau3/Terminal-Bench) found for this ID in this pass; scored provisionally.

Reasoning / knowledge:

- AIME25 **98.3%** (ByteDance)
- LiveCodeBench **87.8%**; Codeforces rating **3020**
- GPQA / HLE: no verified public score found for this ID

Coding:

- SWE-bench Verified **76.5%** (ByteDance)

Long context:

- no verified long-context retrieval number found

Multimodal:

- text/image/video input per LLM Stats; no public MMMU number found

### Normalized scores (1–100)

- **Tool use: 75/100.** No verified agentic benchmark; scored provisionally on the model's agent focus.
- **Reasoning: 78/100.** AIME25 98.3% and Codeforces 3020 are elite math; GPQA/HLE unverified.
- **Context window: 74/100.** 256K window; no retrieval benchmark found.
- **Multimodal: 85/100.** text/image/video in; text-only output.
- **Coding: 85/100.** SWE Verified 76.5% and LiveCode 87.8% are strong.
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M (cached $0.10) is good value.
- **Overall Score: 79/100.** Mean of (75 + 78 + 74 + 85 + 85) / 5 = 79.4 → 79. Best-fit: multimodal agent with elite math/coding; verify agentic suite.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (LLM Stats, ByteDance Seed); scores are normalized 1–100 interpretations, not official vendor scores. Tool use scored provisionally — no verified public benchmark found.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
