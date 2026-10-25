# Leanstral 1.5 — findings by Muse Glimmer 30B

- Source: Mistral / leanstral-1.5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's open-weight MoE model specialized for Lean 4 formal proof engineering, automated theorem proving and autoformalization. Released as free Apache-2.0 Labs model with 256k context.
- **Provider / access:** Mistral Labs API `labs-leanstral-1-5` via Chat Completions; opencode ID `opencode/leanstral-1.5`. Function Calling, Agents & Conversations, Structured Outputs supported.
- **Release / knowledge:** 2026-06-30 release per Mistral docs; blog announcement 2026-07-02. Knowledge cutoff not publicly disclosed.
- **IDs:** `mistral/labs-leanstral-1-5` / `opencode/leanstral-1.5`
- **Context window:** 256k tokens total, 128k max output. Verified by docs.mistral.ai and Hugging Face card; Hugging Face recommends ≤200k for stability.
- **Modalities:** Input text; output text. Reasoning yes, tool calls yes. Hugging Face card claims multimodal input accepts text and image, producing text output, conflicting with Mistral docs which list text-only features; no verified multimodal benchmarks found.
- **Pricing (as of 2026-10-25):** Free via Mistral Labs free tier, Apache-2.0 open weights on Hugging Face. Hosted pricing ~$0.15/$0.45 per 1M per meta.json; current Labs endpoint is $0.
- **Architecture:** MoE, 119B total parameters, 6.5B active per token (128 experts, 4 active). Mistral blog notes 6B active parameters; docs/Hugging Face list 6.5B active — conflict noted. Apache-2.0 open weights.

### Raw benchmarks found

> Sources: Mistral news blog 2026-07-02 "Leanstral 1.5: Proof Abundance for All", docs.mistral.ai/models/leanstral-1-5, Hugging Face model card mistralai/Leanstral-1.5-119B-A6B, and independent review SaaSCity 2026-07-04.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- miniF2F: **100%** saturation validation and test — Mistral blog, saturates miniF2F completely
- PutnamBench: **587/672** solved, ~87.3% at 4M token budget — Mistral blog
- FATE-H: **87%** — Mistral blog, state-of-the-art
- FATE-X: **34%** — Mistral blog, state-of-the-art
- FLTEval: pass@1 **28.9%**, pass@8 **43.2%** — Mistral blog; lifts from 21.9/31.9 baseline

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- FLTEval real-world proof engineering gains noted above; code verification case studies: AVL trees O(log n) proof over 2.7M tokens and bug discovery pipeline flagging 5 previously unreported bugs across 57 repos — Mistral blog

Long context:

- No RULER / GraphWalks / MRCR public score found. Context verified at 256k; test-time scaling shown to 4M tokens per attempt for proof search.

### Normalized scores (1–100)

- **Tool use: 65/100.** Function Calling and Agents & Conversations supported with Lean LSP MCP workflow; no independent Terminal-Bench/Tau3/Claw numbers publicly released, capping score.
- **Reasoning: 85/100.** miniF2F saturation, PutnamBench 87%, FATE-H 87% and FATE-X 34% demonstrate strong formal mathematical reasoning; niche domain limits generalization score.
- **Context window: 73/100.** 256k verified total with 128k output; falls in 200K–500K tier, recommended ≤200k per Hugging Face, no public long-context retrieval benchmark.
- **Multimodal: 15/100.** Official Mistral docs list text-only features; Hugging Face card claims text+image input. No verified multimodal benchmark found, treated as text-only.
- **Coding: 76/100.** Specialized Lean 4 code agent with file edit, bash and Lean LSP use; FLTEval pass@8 43.2% and real-world bug discovery demonstrate strong proof engineering coding, but no public SWE-bench/LiveCodeBench scores.
- **Cost efficiency: 100/100.** $0 free Labs API and Apache-2.0 open weights.
- **Overall Score: 62.8/100.** Mean of five quality dims (65+85+73+15+76)/5 = 62.8 → best-fit as high-specialty formal verification/proof engineering model, not a general-purpose multimodal assistant.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
