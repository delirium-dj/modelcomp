# Mistral Large 4 — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model (1.05T total / 49–52B active MoE, natively multimodal, 160+ languages) — SOTA among open weights on cyber/finance/law, preview API live, weights drop end of Oct 2026.
- **Provider / access:** Mistral AI Studio + OpenRouter + Vercel AI Gateway + OpenCode Zen `opencode/mistral-large-4` (preview API id `mistral-large-4-0`).
- **Release / knowledge:** 2026-10-06 public preview (Mistral blog "le Chonk"); weights by end of Oct 2026; knowledge cutoff not disclosed.
- **IDs:** `opencode/mistral-large-4` (no Free ID on Zen — paid only).
- **Context window:** 1,048,576 (1M/1.05M first-party docs per LLM Reference) vs AA 524K/520K listing; repo meta stub 131,072 outdated. Scored on 1M first-party figure with conflict noted.
- **Modalities:** Text + image in (1.6B vision encoder, native visual grounding SOTA); text out; hybrid instruct+reasoning MoE; structured outputs, function calling, document QnA, agents/conversations, built-in tools.
- **Pricing (as of 2026-10-08):** Mistral API $1.36 in / $4.18 out per 1M (AA); Studio/OR/Vercel $0.68 in / $2.09 out (cache read $0.07) per LLM Reference (preview pricing variance — scored on AA $1.36/$4.18). Repo stub $2.00/$6.00 outdated.
- **Architecture:** MoE 1.05T total / 49B active (LLM Reference; 52B per Mistral blog); trained from scratch on 3,800 Grace Blackwell GPUs in Mistral EU datacenters; open weights pending end-Oct 2026 (currently proprietary preview).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: charted strong in Mistral blog ( Coding/Terminal-Bench-4.0 panel — exact percentage not published in fetched text, no verified numeric value)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Cyber/finance/law enterprise workloads: SOTA among open models per Mistral (qualitative; red-teaming with cyber leaders ongoing)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #64 of 226** (AA; above price-tier median 26; speed #38/226 at 116.1 t/s, cost #56/226 at $1.13/task, verbosity #105/226 at 200M tokens)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (DeepSWE coding panel charted in blog without published numeric value)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: blog charts DeepSWE (no numeric value published)

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 1M first-party (AA lists 524K/520K — conflict noted).

### Normalized scores (1–100)

- **Tool use: 80/100.** TB4.0 + cyber/finance/law SOTA-among-open per vendor + function-calling/agents tooling; capped as no numeric TB/Tau/GDPval row published.
- **Reasoning: 80/100.** AA Index 38 (#64/226, above median 26) is the only numeric composite + 160-language + enterprise vertical SOTA; capped with no GPQA/HLE/LCR/CritPt rows.
- **Context window: 98/100.** 1M first-party window (top tier; AA 524K second-source conflict noted, repo 131K outdated); capped below 100 with no measured retrieval score.
- **Multimodal: 72/100.** Native text+image in (1.6B vision encoder, visual grounding SOTA incl. above closed frontier) text out; capped at text-out only, no video/audio.
- **Coding: 80/100.** Blog DeepSWE + enterprise coding strength + open-weight-competitive claim; capped hard with no numeric SWE/LCB/SciCode/Vibe row.
- **Cost efficiency: 60/100.** $1.36/$4.18 paid preview (AA; Studio $0.68/$2.09 variant); open weights pending — mid value until weights drop.
- **Overall Score: 82/100.** Mean of five non-cost dims (80+80+98+72+80)/5 = 82.0 → 82; best for EU-sovereign open-weight-track agentic + cyber work where 1M + vision + pending weights outweigh missing numeric coding rows.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (Mistral blog 2026-10-06, AA Preview page, LLM Reference page refreshed 2026-10-06; context/pricing conflicts flagged); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
