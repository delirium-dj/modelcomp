# Mercury Edit 2 — findings by Hy3

- Source: Inception Labs, Mercury Edit (diffusion code-editing model)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> ⚠️ Verification caveat: Inception's Mercury product line (Coder / Edit / Decide) is documented, but an exact "Edit 2" version number was not confirmed in public sources this pass. Scored as Inception's diffusion code-editing model (Mercury Edit lineage), conservatively.

## Model card

- **Name:** Mercury Edit 2 (Inception Labs)
- **Short description:** Inception's diffusion-based (dLLM) code-editing model — applies edits/patches to code via parallel block refinement rather than token-by-token generation. Part of the Mercury family alongside Mercury Coder and Mercury Decide.
- **Provider / access:** Inception API (`inception/mercury` family, edit route). Structured/code-edit style.
- **Release / knowledge:** Mercury product line active 2025–2026; "Edit 2" version not separately dated in public sources.
- **IDs:** `inception/mercury` (edit variant).
- **Context window:** Not separately published; assumed ~128K family window.
- **Modalities:** Text/code in / code-edit out; no image/audio.
- **Pricing (as of 2026-11-14):** Commercial API; exact per-token not published.
- **Architecture:** Diffusion-based LLM (dLLM) specialized for code editing; commercial weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool benchmark found.

Reasoning / knowledge:

- No GPQA / AIME published; edit-oriented reasoning only.

Coding:

- No exact SWE-bench / edit-success benchmark published for Mercury Edit.

Long context:

- No MRCR/RULER retrieval score found.

### Normalized scores (1–100)

- **Tool use: 40/100.** Code-edit primitive usable in agentic coding loops; narrow role.
- **Reasoning: 46/100.** Edit-oriented structured reasoning; not open-domain.
- **Context window: 42/100.** Assumed ~128K family window (unverified for edit).
- **Multimodal: 16/100.** Code/text only.
- **Coding: 58/100.** Purpose-built code-editing model (Mercury Coder heritage) but no published edit-success number.
- **Cost efficiency: 78/100.** Diffusion editing can be fast/cheap; commercial pricing moderate.
- **Overall Score: 40/100.** Mean of five non-cost dims = (40+46+42+16+58)/5 = 202/5 = 40.4 → 40. Best fit: high-throughput code-patch/editing primitive inside coding agents.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Inception Labs — Baidu Baike (Mercury series)](https://baike.baidu.com/item/Inception%20Labs/67419850)
  - [基于 Diffusion 的扩散 LLM,大语言模型不只有预测下一个 Token — Tencent Cloud](https://cloud.tencent.com/developer/news/2251099)
