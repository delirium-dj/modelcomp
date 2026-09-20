# Claude Mythos 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 — the Mythos-class half of Anthropic's 2026-09-01 release. It is **the same underlying model as Claude Fable 5.1**, shipping with cybersecurity and biology safeguards relaxed. Not an alias of the June "Claude Mythos 5" (the Mythos configuration of Fable 5, which ran through Project Glasswing).
- **Short description:** Anthropic's restricted research instrument, positioned for defensive-security work and professional life-sciences R&D rather than general sale; identical weights to Fable 5.1 with fewer safeguards intercepting requests.
- **Provider / access:** Anthropic API model ID **`claude-mythos-5-1`, not available on the public API**. Access only through the **Cyber Verification Program** (reduced cyber safeguards for defensive security) and the **Life Sciences Verification Program** (reduced biology safeguards, run in partnership with the US government). Both are vetted-organisation programmes, **US-only at launch**, with no self-serve route and no announced date for wider access. The generally available twin is `claude-fable-5-1` (Claude API, AWS, Google Cloud, Azure).
- **Release / knowledge:** Released 2026-09-01, three months after Fable 5; knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1`; the curated record for this folder tracks it as `anthropic/claude-mythos-5.1`. No OpenCode Zen Free ID — and no public API ID at all, so this entry can never be scored on a free tier.
- **Context window:** 1,000,000 tokens in / **128,000** tokens max output (curated record agrees: "1M / 128K out").
- **Modalities:** the curated record lists text + image in, text out; the June Mythos 5 documentation additionally lists PDF input with text plus tool-call output (parallel function calling, no audio or video). PDF support is therefore reported but not verified for 5.1 specifically.
- **Pricing (as of 2026-09-20):** **not published by Anthropic** — access is programme-gated rather than sold from a price list. The curated record and the identical GA base model both price at **$10 in / $50 out per 1M**, with Fable 5.1's cache reads cut to **$0.25/1M** (≈25% cheaper for typical token-billed workloads, up to ~45% for highly agentic work).
- **Architecture:** proprietary, weights closed. Mythos-class safeguard configuration of the same base model as Fable 5.1; Anthropic's new Enterprise Frontier Safeguards (customer-controlled storage, phased from autumn 2026) is the intended privacy mechanism, with zero data retention available to eligible customers until then.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** — the **only** benchmark Anthropic published for this model, and the top of its launch table (Fable 5.1 55.8%, Opus 5 52.3%, Fable 5 42.0%, GPT-5.6 Sol 37.3%). Vendor-run, with no possible independent measurement because access is gated (Artificial Analysis explicitly cannot score it); it is also a ~19-point jump over Mythos 5's 42.0%.
- Anthropic attributes the ~5-point gap to Fable 5.1 to tasks where the GA model's cyber safeguards intervened, i.e. Mythos 5.1 is simply the less-intercepted configuration of one model.
- GDPval-AA v2 / Tau3-Banking / Tau2-Bench / OSWorld 2.0 / MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas Codebase QnA: no verified public score found **for Mythos 5.1**.
- Same-model proxy (GA twin Fable 5.1, labelled as proxy evidence): leads Opus 5 on all seven rows Anthropic published — Terminal-Bench-Science 0.1 (52.6% vs Opus 5's 29.0%, Fable 5's 24.7%, GPT-5.6 Sol's 22.4%), Terminal-Bench 4.0, GDPval-AA v2, OSWorld 2.0, HLE, AutomationBench and CursorBench 3.2.0.

Reasoning / knowledge:

- No GPQA Diamond, HLE, MMLU-Pro or LCR figure was published for Mythos 5.1 → no verified public score found.
- Proxy (Fable 5.1): Artificial Analysis scores the GA twin at **53** on its re-based v4.3 Intelligence Index, tied first with GPT-6 Astra (which scores 66 on the launch-week scale, first of 192 models).
- The cyber/bio numbers that June's Mythos 5 launch quantified were **not** republished: ExploitBench 78.0% and BioMysteryBench 46.1% belong to Mythos 5, not 5.1.

Coding:

- Terminal-Bench 4.0: **60.9%** (see above) — the highest figure in Anthropic's own agentic-coding table.
- **No SWE-bench figure of any kind** was published, matching the gap on Fable 5.1 → no verified public score found for SWE-bench Verified/Pro, DeepSWE, LiveCodeBench, SciCode or Vibe Code Bench.
- Real-world engineering results reported by Anthropic (no harness score attached): custom GPU kernels that sped up seven open-source genomics and protein models by up to **2.5× on an NVIDIA H100** with identical outputs, cutting estimated genome-wide analysis costs by 30–60%; protein-binder designs against EGFR, Nipah G and 15-PGDH with a near-50% hit rate; and a Venus topographical map at 2–3 km resolution (vs the previous 10–20 km) released under a Creative Commons licence.

Multimodal:

- Text and image input with text-only output per the curated record; PDF input is documented only for the June Mythos 5 configuration. No MMMU, VideoMME or CharXiv result exists, and audio/video are unsupported.

Long context:

- 1,000,000-token input and 128,000-token output are documented, but **no MRCR, RULER or GraphWalks result was published** at any window length (the June Mythos 5 release likewise lacked independent needle-in-a-haystack evaluation across the full 1M range).

Composite panels:

- The AI Rankings places Mythos 5.1 at **#1 on capability** while marking it "Restricted", with the explicit caveat that a model behind a vetting programme is "a capability signal, not a purchase"; Artificial Analysis cannot score it at all.

### Normalized scores (1–100)

> Only Tool use and Coding rest on a directly verified Mythos 5.1 number (Terminal-Bench 4.0). The other dimensions are marked **provisional** and lean on the same-model GA twin (Fable 5.1) or on documented structural facts. Nothing here is invented: where evidence is missing, the score reflects the band of a documented fact, not a guess at capability.

- **Tool use: 93/100.** Terminal-Bench 4.0 60.9% is the top score in Anthropic's own agentic table, 5 points above the GA twin; provisional because no GDPval-AA, Tau3, MCP-Atlas, OSWorld or Claw-Eval number exists for this ID and no independent harness can reach it.
- **Reasoning: 90/100 (provisional).** No reasoning benchmark was published for 5.1; the closest evidence is the same-model GA twin leading Opus 5 on all seven Anthropic rows (including HLE) and scoring 53 on AA's re-based v4.3 Intelligence Index, tied with GPT-6 Astra. Capped below 95 because GPQA/HLE/LCR numbers for this ID are unpublished.
- **Context window: 95/100.** A documented 1M-token input with 128K output is the floor of the ≥1M band; no retrieval measurement exists to justify 100.
- **Multimodal: 75/100 (provisional).** Image input with text-only output sits at the top of the image-only band, nudged up only because PDF ingestion is documented for the identical base-model configuration; there is no published vision benchmark and no audio/video support.
- **Coding: 92/100.** Terminal-Bench 4.0 60.9% plus the 2.5× H100 kernel optimisations and protein-design results are strong agentic-coding evidence, but the complete absence of SWE-bench Verified/Pro, DeepSWE, LiveCodeBench and SciCode for this ID keeps it short of 95+.
- **Cost efficiency: 30/100 (proxy).** No price is published — access is programme-gated — so this scores the curated record and the identical GA base model at $10 in / $50 out per 1M (≈30 on the rubric), softened only by the $0.25/1M cache-read pricing and up-to-45% agentic savings. Outside the two programmes the practical cost is unattainability rather than expense.
- **Overall Score: 89/100.** (93 + 90 + 95 + 75 + 92) / 5 = 89.0 → **89**. Best fit: vetted US defensive-security and life-sciences teams; everyone else should use the identically-performing Claude Fable 5.1, since the 5-point Terminal-Bench 4.0 gap is the only measured difference and it comes from the GA model's safeguard intercepts.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-20
- Method: fresh public internet research on 2026-09-20 — Anthropic's launch post "Introducing Claude Fable 5.1 and Claude Mythos 5.1" (2026-09-01, system card referenced), Vellum's benchmark walkthrough (2026-09-02) and The AI Rankings access/restriction dossier (last verified 2026-09-02), cross-checked against the curated record for this folder. Mythos 5.1 is deliberately under-disclosed, so most dimensions are flagged provisional proxies rather than measured values; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
