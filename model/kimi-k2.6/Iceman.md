# Kimi K2.6 — findings by Iceman

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI’s Kimi K2.6 is an open-source native multimodal agentic Mixture-of-Experts model focused on long-horizon coding, coding-driven design, proactive autonomous execution, and swarm-based task orchestration.
- **Provider / access:** Moonshot AI platform/API and open weights (Hugging Face `moonshotai/Kimi-K2.6`, Modified MIT license). Local metadata lists `opencode/kimi-k2.6` and `noFreeId`.
- **Release / knowledge:** Model card and platform docs reviewed 2026-11-10; no explicit knowledge cutoff date extracted from reviewed sources.
- **IDs:** `kimi-k2.6`, `moonshotai/Kimi-K2.6`.
- **Context window:** 256K tokens (model card states Context Length 256K). Moonshot platform quickstart/docs also describe 256K-token context behavior; max output can be large in API surfaces but not fully specified in reviewed sources.
- **Modalities:** Native multimodal text, image, and video input; text output (Hugging Face model card/examples and Moonshot platform docs). Local metadata states text/image in, text out.
- **Pricing (as of 2026-11-10):** Moonshot list pricing ~$0.95 / 1M input and $4.00 / 1M output per local metadata/OpenRouter provider listings (provider prices vary; cached/input tiers may apply by provider).
- **Architecture:** Mixture-of-Experts (MoE), 1T total parameters, 32B activated, 61 layers (1 dense), 384 experts with 8 selected per token + 1 shared expert, MLA attention, SwiGLU, MoonViT vision encoder (400M params), 160K vocabulary (Hugging Face model card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `moonshotai/Kimi-K2.6` (evaluation results table) unless noted. Values are reported as shown in the model card.

Agent / tool use:

- HLE-Full (w/ tools): **54.0**
- BrowseComp: **83.2** (Agent Swarm: **86.3**)
- DeepSearchQA (f1-score): **92.5**; (accuracy): **83.0**
- WideSearch (item-f1): **80.8**
- Toolathlon: **50.0**
- MCPMark: **55.9**
- Claw Eval (pass^3): **62.3**; (pass@3): **80.9**
- APEX-Agents: **27.9**
- OSWorld-Verified: **73.1**
- GDPval-AA / Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- HLE-Full (no tools): **34.7**
- AIME 2026: **96.4**
- HMMT 2026 (Feb): **92.7**
- IMO-AnswerBench: **86.0**
- GPQA-Diamond: **90.5**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- Terminal-Bench 2.0 (Terminus-2): **66.7**
- SWE-Bench Pro: **58.6**
- SWE-Bench Multilingual: **76.7**
- SWE-Bench Verified: **80.2**
- SciCode: **52.2**
- OJBench (python): **60.6**
- LiveCodeBench (v6): **89.6**

Vision / multimodal:

- MMMU-Pro: **79.4** (w/ python: **80.1**)
- CharXiv (RQ): **80.4** (w/ python: **86.7**)
- MathVision: **87.4** (w/ python: **93.2**)
- BabyVision: **39.8** (w/ python: **68.5**)
- V* (w/ python): **96.9**

Long context:

- 256K context window documented; no standalone MRCR/RULER/GraphWalks numeric long-context retrieval benchmark score extracted from reviewed sources.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 89/100.** Strong verified agentic results (HLE w/ tools 54.0, BrowseComp 83.2/86.3 swarm, Toolathlon 50.0, MCPMark 55.9, OSWorld-Verified 73.1, Claw Eval pass@3 80.9) indicate high tool/agent capability; capped by mixed performance on harder agent suites (APEX-Agents 27.9).
- **Reasoning: 89/100.** Excellent verified reasoning/math/science results (GPQA-Diamond 90.5, AIME 2026 96.4, HMMT 92.7, IMO-AnswerBench 86.0, HLE-Full 34.7) support strong frontier-adjacent reasoning.
- **Context window: 84/100.** 256K context is solid for long-horizon work but below 500K–1M leaders; suitable for substantial workflows but not extreme-window tasks.
- **Multimodal: 88/100.** Verified native text/image/video input and strong vision benchmarks (MMMU-Pro 79.4/80.1, CharXiv RQ 80.4/86.7, MathVision 87.4/93.2, V* 96.9) indicate high multimodal capability.
- **Coding: 91/100.** Strong verified coding performance (SWE-Bench Verified 80.2, SWE-Bench Pro 58.6, SWE-Bench Multilingual 76.7, Terminal-Bench 2.0 66.7, LiveCodeBench v6 89.6, SciCode 52.2) supports high coding/agentic coding quality.
- **Cost efficiency: 84/100.** Open weights plus moderate hosted pricing (~$0.95/$4 list, provider-dependent) offer good value for a 1T-parameter multimodal MoE, though self-hosting cost/footprint is significant.
- **Overall Score: 88/100.** Mean of the five non-cost dims (89, 89, 84, 88, 91) = 88.2 → 88. Best fit for multimodal long-horizon coding, agent swarms, and tool-using workflows where 256K context is sufficient.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Moonshot platform docs and Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Kimi K2.6 model card (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Kimi K2.6 quickstart (Moonshot platform docs)](https://platform.moonshot.ai/docs/guide/kimi-k2-6-quickstart)
  - [Kimi K2.6 on OpenRouter (pricing/specs)](https://openrouter.ai/moonshotai/kimi-k2.6)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
