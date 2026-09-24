# GLM 5.1 Coding — findings by Space Bunny Alpha

- Source: Z.AI (`glm-5.1`; GLM-5.1)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weight MoE model for agentic software engineering, long-horizon tasks, tool use, and mathematical/professional work; superseded by GLM-5.2 and GLM-5.3.
- **Provider / access:** Z.AI API (`glm-5.1`); Hugging Face `zai-org/GLM-5.1`; OpenCode Zen route `opencode/glm-5.1` (no free ID found).
- **Release / knowledge:** BenchLM lists April 7, 2026; Hugging Face metadata shows repository creation on 2026-04-03. No reliable knowledge cutoff was shown.
- **IDs:** `glm-5.1`; `zai-org/GLM-5.1`.
- **Context window:** **203K** (BenchLM catalog); repository metadata in the project says 200K–205K, and the exact maximum output is not independently verified.
- **Modalities:** Text input/output; reasoning/thinking and tool calls supported. The GLM-5.1 chat template is text-only; no image/video/audio modality is claimed.
- **Pricing (as of 2026-09-24):** $1.40 per 1M input and $4.40 per 1M output tokens (BenchLM; paid Z.AI route). No Zen Free ID was found.
- **Architecture:** Open-weight MoE, approximately 754B total parameters; the Hugging Face config identifies 8 experts per token and MIT license. Active parameter count was not verified in the reviewed metadata.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **63.5%** (Z.AI GLM-5.1 model-card eval metadata; provider exact)
- Terminal-Bench 2.1 (Vals AI): **56.9%** (BenchLM, Vals AI leaderboard)
- MCP Atlas: **71.8%** (Z.AI GLM-5.1 model-card eval metadata)
- BrowseComp: **68%** (BenchLM, provider-exact Z.AI source)
- Claw-Eval: **62.3%** (BenchLM, Claw-Eval leaderboard)
- τ³-Bench: **70.6%** (BenchLM, provider-exact Z.AI source)
- Toolathlon, GDPval-AA, and ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Z.AI GLM-5.1 model-card eval metadata)
- GPQA Diamond (Vals AI): **84.5%** (BenchLM, Vals AI leaderboard)
- HLE: **31%** without tools; **52.3%** with tools (Z.AI model-card eval metadata)
- MMLU-Pro (Vals AI): **86.9%** (BenchLM, Vals AI leaderboard)
- AIME 2026: **95.3%** (Z.AI model-card eval metadata)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Pro: **58.4%** (Z.AI model-card eval metadata; high reasoning)
- SWE-bench (Vals AI): **76.4%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **81.4%** (BenchLM, Vals AI leaderboard)
- SWE-Rebench: **62.7%**; NL2Repo: **42.7%** (BenchLM, independent source rows)
- Vibe Code Bench: **31.46%** (BenchLM, Vals AI)
- DeepSWE, SciCode, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- Context capacity: **203K** (BenchLM catalog). No independent MRCR/RULER retrieval-at-length score was found.

Sources consulted: [Z.AI GLM-5.1 Hugging Face model card](https://huggingface.co/zai-org/GLM-5.1) and [BenchLM GLM-5.1](https://benchlm.ai/models/glm-5-1), accessed 2026-09-24. Provider-exact and Vals AI rows are labeled separately.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 63.5%, MCP Atlas 71.8%, BrowseComp 68%, and Claw-Eval 62.3% provide solid agent evidence; weaker Terminal-Bench Vals 56.9% and missing Toolathlon/GDPval rows cap the score.
- **Reasoning: 85/100.** GPQA 86.2%, MMLU-Pro 86.9%, and AIME 95.3% are strong; HLE 31% without tools / 52.3% with tools and missing LCR/CritPt values temper confidence.
- **Context window: 70/100.** The verified 203K window is in the 200K–500K tier; no retrieval-at-length result was found.
- **Multimodal: 15/100.** The evaluated model and official chat template are text-only; no image/video/audio support is claimed.
- **Coding: 80/100.** SWE-Pro 58.4%, SWE Vals 76.4%, and LiveCodeBench Vals 81.4% support solid coding; Vibe Code Bench 31.46% and missing SWE-Verified/DeepSWE values cap the score.
- **Cost efficiency: 72/100.** $1.40/$4.40 is a reasonable paid rate, but it is not a free route and sits above lower-cost Flash/GLM alternatives.
- **Overall Score: 66.4/100.** (82 + 85 + 70 + 15 + 80) / 5 = 66.4. Best fit: text-only long-horizon coding and tool agents where an open-weight Z.AI model and paid API access are acceptable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the Z.AI Hugging Face model card and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
