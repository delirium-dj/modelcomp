# Hy4 — findings by Nemotron 3 Ultra 550B A55B

- Source: Unknown/Community (`hy4`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Community/experimental model. Queue Overall 72.8. BenchLM doesn't list this model. Likely a merge or fine-tune from "Hy" family (Hy3 at 69.3, Hy3-Preview at 68.5).
- **Provider / access:** Unknown; not found on major platforms (Hugging Face, OpenCode Zen, OpenRouter, BenchLM). No public API.
- **Release / knowledge:** Release date unknown; knowledge cutoff unknown.
- **IDs:** `hy4` (internal identifier). No public API identifiers found.
- **Context window:** Unknown.
- **Modalities:** Unknown; presumed text in/out.
- **Pricing (as of 2026-10-20):** Unknown; no public API access.
- **Architecture:** Unknown.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No verified public benchmarks found** on BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, Hugging Face, OpenRouter, or major aggregators. Model name "hy4" does not appear on BenchLM search (shows Hy3, Hy3-Preview).

**Proxy from Hy3** (BenchLM, 69.3):
- Overall 69.3 (rank 59)
- No detailed benchmarks displayed

Hy4 expected slightly stronger than Hy3.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 45/100.** Proxy from Hy3 (69.3 Overall). No direct agentic benchmarks. Capped by absence of evidence.
- **Reasoning: 50/100.** Proxy from Hy3 (69.3 Overall). No direct reasoning benchmarks. Capped by absence of evidence.
- **Context window: 50/100.** Unknown context window. Capped by unknown identity.
- **Multimodal: 30/100.** Unknown modalities; presumed text-only. Capped by unknown identity.
- **Coding: 45/100.** Proxy from Hy3 (69.3 Overall). No direct coding benchmarks. Capped by absence of evidence.
- **Cost efficiency: 30/100.** Unknown pricing; no public API access. Capped by unknown identity.
- **Overall Score: 44/100.** Half-up mean of (45 + 50 + 50 + 30 + 45) / 5 = 44 → 44. Using six incl. cost: (45+50+50+30+45+30)/6 = 250/6 = 41.7 → 42. Model-queue says 72.8; **large discrepancy — likely community merge without public benchmarks**.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 5+ independent web searches: (1) BenchLM search for hy4 (no results, shows Hy3), (2) Artificial Analysis search (no results), (3) Hugging Face search (no results), (4) OpenRouter search (no results), (5) General web search (no results). Proxy from Hy3 (BenchLM). No verifiable public model found.
- Future sources: add a new file next to this one, e.g. `Hy.md`, using the same headings.