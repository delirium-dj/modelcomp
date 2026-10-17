# Claude Sonnet 4.6 — findings by Beam

- Source: Anthropic/Claude Sonnet 4.6, `anthropic/claude-sonnet-4-6`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's mid-tier model (Feb 17, 2026) with 1M context (beta), improved coding, computer use, long-context reasoning, agent planning. Near-Opus performance at lower cost.
- **Provider / access:** Anthropic API `claude-sonnet-4-6`; AWS Bedrock; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released 2026-02-17; knowledge cutoff August 2025.
- **IDs:** `anthropic/claude-sonnet-4-6`
- **Context window:** 1,000,000 tokens (beta); max output 64,000 (AWS) / 128,000 (Puter).
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $15.00 / 1M output, $0.30 / 1M cache read, $3.75 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **46.3** (#55/128)
- Terminal-Bench 2.0: **59.1%**
- OSWorld-Verified: **72.1%**
- OSWorld 2.0: **8.3%**
- Claw-Eval: **67.8%**
- CyberGym: **65.2%**
- Gert Labs: **62.92%**
- JobBench: **36.9%**
- ApprenticeBench: **2%**
- Terminal-Bench 2.1 (Vals): **57.3%**
- BrowseComp: not reported for 4.6
- MCP Atlas: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **62.8** (unranked, 4 rows)
- ARC-AGI-1: **86.00%**
- ARC-AGI-2: **58.3%**
- GPQA Diamond: **79.9%** (Puter/AA)
- HLE: **13.3%** (Puter/AA)
- IFBench: **41.2%**
- LCR: **68.3%**
- τ²-Bench: **79.5%**
- AA Intelligence Index: **24.7**

Coding:

- Coding public-lane (BenchLM): **44.7** (#54/150)
- SWE-bench Verified: **79.6%**
- SWE-Rebench: **60.7%**
- LiveCodeBench (Vals): not reported
- Vibe Code Bench: **51.48%**
- VulcanBench CII v1: not reported

Long context:

- 200K window (per BenchLM) / 1M beta (Anthropic); MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **58.7** (#45/54)
- CharXiv: **77.4%**

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic lane #55/128 (46.3), Terminal-Bench 2.0 59.1%, OSWorld 72.1%, Claw-Eval 67.8%, CyberGym 65.2%; caps at OSWorld 2.0 8.3%.
- **Reasoning: 72/100.** ARC-AGI-1 86.0%, ARC-AGI-2 58.3%, GPQA 79.9%, LCR 68.3%, AA Intelligence 24.7; caps at HLE 13.3%.
- **Context window: 72/100.** 200K-1M (beta); caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/PDF in; CharXiv 77.4%.
- **Coding: 72/100.** SWE-bench Verified 79.6%, Vibe Code 51.48%, coding lane #54/150 (44.7); caps at no SWE-bench Pro.
- **Cost efficiency: 82/100.** Mid-low $3/$15 per 1M.
- **Overall Score: 73.2/100.** Mean of five quality dims (BenchLM aggregate 55.88); best-fit for mid-tier agentic coding at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news, AWS Bedrock, BenchLM, Puter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.