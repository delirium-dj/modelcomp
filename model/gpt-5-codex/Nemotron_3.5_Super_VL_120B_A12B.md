# GPT-5 Codex — findings by Nemotron 3.5 Super VL 120B A12B

- Source: developers.openai.com/api/docs/models/gpt-5-codex (official OpenAI API docs), openai.com/index/introducing-gpt-5-3-codex (official launch blog), openai.com/index/introducing-gpt-5-2-codex (official), techcrunch.com 2025-09-15 (press), ai.azure.com/catalog/models/gpt-5-codex (Microsoft Foundry), benchmarklist.com/models/openai-gpt-5.1-codex (ECI reference), vals.ai/models/openai_gpt-5.3-codex (independent), lmspeed.net/model/gpt-5-3-codex (provider benchmarks), openrouter.ai/openai/gpt-5.2-codex-20260114 (AA benchmarks), github.com/redhat-et/coding_agent_bench (SWE-bench GPT-5.5 Codex run)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex (OpenAI) — represents the GPT-5 Codex family (GPT-5-Codex, GPT-5.1-Codex, GPT-5.2-Codex, GPT-5.3-Codex)
- **Short description:** OpenAI's GPT-5 base optimized for agentic coding in Codex; available in Responses API only; text+image in → text out; 400K context window (272K max input, 128K max output); Sep 30, 2024 knowledge cutoff; reasoning token support; proprietary; optimized for long-running agentic coding tasks (can spend minutes to hours on a task).
- **Provider / access:** OpenAI API (Responses API), Codex CLI/IDE/cloud; ChatGPT Plus/Pro/Business/Edu/Enterprise; Azure OpenAI Service; AWS Bedrock (planned). Not available via Chat Completions/Live/Realtime/Assistants/Batch/Fine-tuning/Embeddings.
- **Release / knowledge:** GPT-5-Codex announced 2025-09-15 (TechCrunch); GPT-5.2-Codex and GPT-5.3-Codex followed (2025-2026); knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-5-codex`, `gpt-5.1-codex`, `gpt-5.2-codex`, `gpt-5.3-codex` (OpenAI API).
- **Context window:** 400,000 tokens (official OpenAI docs for the family).
- **Modalities:** Text + image in, text out; reasoning yes (dynamic thinking, seconds to hours); tool calls yes (function calling, web search); structured outputs/JSON mode yes.
- **Pricing (as of 2026-10-16):** GPT-5-Codex $1.25/M input, $10/M output; GPT-5.3-Codex $1.75/M input, $14/M output; GPT-5.1-Codex-Max $1.25/$10 (per OpenAI docs). Azure/OpenRouter provider pricing varies widely.
- **Architecture:** GPT-5 base, codex-optimized; parameter count undisclosed.

### Raw benchmarks found

Official OpenAI launch blog (GPT-5.3-Codex: "the most capable agentic coding model to date"), OpenAI API docs, Microsoft Foundry, Vals AI, LMSpeed, OpenRouter/AA, redhat-et coding_agent_bench (GPT-5.5 Codex SWE-bench run), TechCrunch.

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (GPT-5.3-Codex, OpenAI blog) / **64.0%** (GPT-5.2-Codex)
- OSWorld-Verified: **64.7%** (GPT-5.3-Codex, xhigh) vs 38.2% (GPT-5.2-Codex) / 37.9% (GPT-5.2)
- SWE-Lancer IC Diamond: **81.4%** (GPT-5.3-Codex) vs 76.0% (GPT-5.2-Codex)
- Cybersecurity CTF: **77.6%** (GPT-5.3-Codex) vs 67.4% (GPT-5.2-Codex)
- GDPval (wins or ties): **70.9%** (GPT-5.3-Codex)
- SWE-bench Verified: **85%** (benchlm compare, GPT-5.3 Codex) / **78.0%** (Vals AI Mini-SWE-agent, GPT 5.3 Codex) / GPT-5.5 Codex 79.8% (redhat-et harbor run)
- SWE-bench Pro: **56.8%** (GPT-5.3-Codex, OpenAI blog) vs 56.4% (GPT-5.2-Codex) / 55.6% (GPT-5.2)
- Terminal-Bench 2.1 (Vals): **76.4%** (GPT-5.5, benchlm compare)
- LiveCodeBench (Vals): **87.3%** (GPT-5.3 Codex, benchlm compare)

Reasoning / knowledge:

- Not heavily reported as a general knowledge model (codex-optimized); τ²-bench results 86.0 (LMSpeed); AA Intelligence Index 32.5 (#50/124, LMSpeed); AA-GPQA Diamond 91.5 (#23/113, LMSpeed)
- MMLU/GPQA not isolated for Codex variants in fetched sources

Coding:

- SWE-bench Verified: 78–85% (see above) — flagship agentic coding strength
- SWE-bench Pro: 56.8% (GPT-5.3-Codex)
- LiveCodeBench (Vals): 87.3% (GPT-5.3 Codex)
- Design Arena / Website Arena: not isolated for Codex
- HumanEval+: not isolated

Multimodal & grounded:

- Image input supported (text+image in); no standard vision benchmark scores isolated for Codex variants.

Long context:

- 400K context; τ²-bench 86.0 (LMSpeed) suggests long-context reasoning capability; no public needle-recall curve.

Instruction following:

- IFBench: 77.6% (AA, GPT-5.2 Codex xhigh, via OpenRouter)
- AA-LCR: 82.3% (AA, GPT-5.2 Codex xhigh)

### Conflicting results noted

- SWE-bench Verified: 85% (benchlm compare citing OpenAI) vs 78.0% (Vals AI Mini-SWE-agent) vs 79.8% (GPT-5.5 Codex redhat-et) — different harnesses/scaffolding; all cited.
- Terminal-Bench: 77.3% (OpenAI blog, GPT-5.3-Codex Terminal-Bench 2.0) vs 76.4% (GPT-5.5 Terminal-Bench 2.1 Vals) — different benchmark versions.
- Multiple Codex variants (5/5.1/5.2/5.3) with different scores — the slug `gpt-5-codex` covers the family; GPT-5.3-Codex is the latest flagship and is used as the primary reference.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. The `gpt-5-codex` slug maps to the GPT-5 Codex family; GPT-5.3-Codex figures are primary where variant-specific.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.0 77.3, OSWorld-Verified 64.7, SWE-Lancer IC Diamond 81.4, Cybersecurity CTF 77.6, GDPval 70.9 — top-tier agentic coding; capped by no public MCP-Atlas/BrowseComp/OSWorld-2.1 scores.
- **Reasoning: 72/100.** τ²-bench 86.0, AA-LCR 82.3, IFBench 77.6, AA-GPQA Diamond 91.5 (AA Intelligence Index 32.5 is mid-pack because it's a composite); knowledge breadth not Codex's focus.
- **Context window: 80/100.** Declared 400K; τ²-bench 86.0 indicates strong long-context reasoning; no public full-window retrieval curve.
- **Multimodal: 60/100.** Image input supported but no standard vision benchmarks isolated; primarily a text/code model with image input.
- **Coding: 84/100.** SWE-bench Verified 78–85%, SWE-bench Pro 56.8%, LiveCodeBench 87.3, Terminal-Bench 77.3, OSWorld-Verified 64.7 — the standout dimension; "most capable agentic coding model to date" per OpenAI.
- **Cost efficiency: 60/100.** $1.25–1.75/M input, $10–14/M output — premium pricing for a specialist coding model; not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (78 + 72 + 80 + 60 + 84) / 5 = 74.8 → 75. Best-fit recommendation: frontier agentic coding model for long-running software engineering tasks; not a general knowledge model; premium price.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + launch blogs + Microsoft Foundry + vals.ai + lmspeed + OpenRouter/AA + redhat-et SWE-bench run + TechCrunch); scores are normalized 1–100 interpretations, not official vendor scores. GPT-5.3-Codex used as primary variant reference for the gpt-5-codex slug.
- Future sources: add a new file next to this one, using the same headings.
