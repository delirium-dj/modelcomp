# MAI-Code-1.1-Flash — findings by GLM 5.3

- Source: Microsoft AI (`mai-code-1.1-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's vision-capable successor to MAI-Code-1-Flash — fast agentic coding for GitHub Copilot and VS Code with image and PDF input (screenshot-to-prototype), adaptive thinking, and on-device execution in Copilot on supported devices.
- **Provider / access:** GitHub Copilot (VS Code / Copilot CLI); per-token API at $0.20 in / $1.20 out per 1M, cached input $0.02 (project meta). Project meta lists Zen ID `opencode/mai-code-1.1-flash` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026 (current microsoft.ai model page, which now serves the 1.1 product under the 1.0 URL); knowledge cutoff not stated.
- **IDs:** `opencode/mai-code-1.1-flash` (project meta); official model card PDF on microsoft.ai.
- **Context window:** 256,000 total, 128,000 max output (project meta; BenchLM lists 256K).
- **Modalities:** text, image, PDF in ("screenshots, diagrams, designs, and UI mock ups" — microsoft.ai model page); text out; reasoning yes (BenchLM); agentic tool use yes; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.20 in / $1.20 out per 1M via GitHub Copilot, cached input $0.02 (project meta) — a large cut from 1.0's $0.75/$4.50; local model calls on supported devices carry no per-inference charge.
- **Architecture:** proprietary; parameters undisclosed; custom-trained for native VS Code / Copilot CLI integration.

### Raw benchmarks found

> Coverage warning: BenchLM tracks this model with only 3 source-displayable rows, all vendor-run from the official model card; Artificial Analysis has no page (404). No independent harness has published numbers for this ID.

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (Microsoft AI MAI-Code-1.1-Flash model card via BenchLM)
- GDPval / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- **no verified public score found** for any reasoning/knowledge benchmark (GPQA, HLE, LCR, Intelligence Index all absent)

Coding:

- SWE-bench Verified: **72.6%** (Microsoft AI model card via BenchLM)
- Terminal-Bench 2.1 (coding-side view): **62.9%** (via BenchLM)
- LiveCodeBench / SciCode / SWE-bench Pro: **no verified public score found**

Multimodal:

- **no verified public score found** for any image/PDF benchmark (image and PDF input are product-verified capabilities, not benchmarked publicly)

Long context:

- 256K window (project meta, BenchLM); no MRCR/RULER/LCR retrieval score published.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 at 62.9% clears the 45–60% mid band and the model is trained directly in the production Copilot harness; capped by vendor-only evidence and zero GDPval/Tau3 coverage.
- **Reasoning: 55/100.** No direct reasoning benchmark exists for this ID — scored provisionally from its agentic-coding profile (SWE-V/TB tasks imply mid-band reasoning); this is the weakest-evidenced dimension.
- **Context window: 72/100.** 256K sits just above the 200K (=70) tier floor; no retrieval-quality measurement exists.
- **Multimodal: 72/100.** Image and PDF input are verified product capabilities (screenshot-to-prototype) with text-only output — PDF-in lifts it over the plain image-in band; no benchmark quantifies the quality.
- **Coding: 72/100.** SWE-bench Verified 72.6% with Terminal-Bench 2.1 62.9% is a solid mid-frontier coding profile; capped by vendor-only sourcing and no LiveCodeBench/SWE-Pro corroboration.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M with $0.02 cached input is near the top of the paid-value band, and free on-device execution in Copilot adds a $0 path.
- **Overall Score: 67/100.** (65 + 55 + 72 + 72 + 72) / 5 = 67.2 → 67. Best-fit recommendation: everyday Copilot-native agentic coding with design-to-code (screenshot/PDF) intake at budget pricing; independent benchmark coverage is still too thin to rank it against frontier coding models.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (BenchLM tracking the official Microsoft model card, microsoft.ai product page, project pricing meta); scores are normalized 1–100 interpretations, not official vendor scores. Both capability numbers are vendor-run.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
