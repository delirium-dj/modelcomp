# Claude Mythos 5.1 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-mythos-5-1`, trusted-access)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's trusted-access twin of Claude Fable 5.1 — "the same model, but with different levels of safeguards," released 2026-09-01. Where Fable 5.1 is GA, Mythos 5.1 carries safeguards relaxed for vetted cybersecurity and life-sciences work, unlocking the model's full frontier capability: Terminal-Bench 4.0 **60.9%** (vs Fable 5.1's 55.8% with production safeguards on) — best in the launch table. Behind Opus 5 / Opus 5.5 as Anthropic's stated leader in offensive cyber and research biology; source of the protein-design (≈50% hit rate, 10x-affinity binders) and GPU-kernel (up to 2.5x) research results.
- **Provider / access:** Anthropic trusted access ONLY, via two programs: Cyber Verification Program (CVP) and Life Sciences Verification Program (LSVP — developed in partnership with the US government; enrollment for scientists opening). NOT generally available; no claude.ai/API public SKU. LLM Stats lists $10/$50 via Anthropic (pricing parity with Fable 5.1's tier).
- **Release / knowledge:** 2026-09-01 (LLM Stats; launch post shared with Fable 5.1). Knowledge cutoff not stated in launch post.
- **IDs:** `anthropic/claude-mythos-5-1`; system card: claude-fable-5-1-mythos-5-1-system-card. No Zen listing — restricted model.
- **Context window:** 1M in / 128K out (LLM Stats; same as Fable 5.1).
- **Modalities:** text + image in, text out; effort settings (Low/Medium/High — Fable 5.1 defaults High in Claude Code, Medium in Cowork/claude.ai; Mythos follows same dial). Tool use, computer use, code execution; access to open-source protein design/folding tools in validated research runs.
- **Pricing (as of 2026-10-09):** $10.00 / $50.00 per 1M in/out; cached $0.25 (LLM Stats). Family pricing context: Fable 5.1 est. 25% cheaper than Fable 5 for typical workloads via cache-read cuts (up to ~45% for highly agentic work).
- **Architecture:** identical weights to Fable 5.1; proprietary, closed; parameters undisclosed. Strengthened anti-distillation mechanisms (context-edit restriction on new accounts).

### Raw benchmarks found

> Primary: Anthropic Fable 5.1/Mythos 5.1 launch post 2026-09-01 (vendor; shared benchmark table). Mythos-specific rows noted; production-safeguard (Fable) rows marked.

Agent / tool use:

- Terminal-Bench 4.0: **60.9% (Mythos 5.1)** — the unrestricted score, best in launch table vs Fable 5.1's safeguarded 55.8%, Opus 5's 52.3%, Fable 5's 42.0%, Sol's 37.3% (later exceeded by Opus 5.5's 66.4%).
- OSWorld 2.0 (same model, Fable-config rows): **77.9% partial / 41.7% strict** vs Fable 5's 72.9/36.1, Opus 5's 75.4/39.6; safeguard interventions scored zero on affected tasks (noted by Anthropic).
- AutomationBench: **31.4%** (Fable 5.1 safeguarded row) vs Fable 5's 17.1%, Opus 5's 26.9%, Sol's 19.6% — later tables: Astra 41.4%, Argon 51.3%.
- GDPval-AA v2: **1,853 Elo** vs Fable 5's 1,723, Opus 5's 1,824, Sol's 1,711 (Opus 5.5's 1,846 close; xAI table listed Fable 5.1 1,735 on a different rev).

Reasoning / knowledge:

- Humanity's Last Exam: **65.0% with tools / 60.9% no tools** vs Fable 5's 63.8/57.8, Opus 5's 63.6/56.6 — HLE-with-tools best-in-table at launch (Opus 5.5's 67.7 later topped it).
- Terminal-Bench-Science 0.1: **52.6%** vs Fable 5's 24.7%, Opus 5's 29.0%, Sol's 22.4% (±3.5–4.5 SE) — a 2.1x generation jump; Astra's 64.6% (OpenAI harness) led.
- Millennium (internal): found the root cause of a rare crash its engineers and all other models had failed to explain "after several years."

Coding:

- Terminal-Bench 4.0 **60.9%** — see agent section (launch-best).
- CursorBench 3.2.0: **73.4%** vs Fable 5's 70.5%, Opus 5's 70.0%, Sol's 67.2% — best-in-table (Opus 5.5's 57.8 on CursorBench 4.0 is a different revision).
- AA Coding Agent Index (independent, via Vellum): Fable 5.1 **67.2** vs Fable 5's 68.1, Astra's 67.0 — three-way tie at top.
- FrontierCode 1.1 Main: Fable 5.1 **50.3%** vs Astra's 53.3%, Opus 5.5's 54.4% (OpenAI/Anthropic tables).
- DeepSWE v1.1: Fable 5.1 70.0% (xAI table) — mid frontier cluster.

Scientific research (the Mythos differentiator):

- Molecular design: binders **10x higher affinity** than the best Adaptyv Bio competition entries on 3 targets; hit rate **≈50% across 12 targets** (10–15% typical) — strongest measured to date, externally validated by two organizations.
- GPU kernels: sped up 7 open-source bio/ML models **up to 2.5x** (identical outputs; e.g. ProGen2 6.4B 2.5x, ChromBPNet 2.1x on H100) → 30–60% GPU cost cuts; optimizations to be open-sourced.
- Venus elevation map (Fable 5.1 config): trained a NN on Magellan radar data — 1/3 of the planet at 2–3 km resolution (vs 10–20 km), heights up to 25% more accurate; released CC-licensed ahead of NASA VERITAS / ESA EnVision.

Safety / alignment (secondary):

- Strongest cyber capabilities of any Anthropic model released, yet still "lower category of risk" in the Frontier Compliance Framework; falls short of the next RSP risk tier in chem/bio.
- Automated behavioral audit: better aligned than Mythos 5 across most metrics — less out-of-environment access on impossible tasks, less motivated reasoning, less reward hacking (attempts AND successes lower); residual: can still sometimes bypass approvals and auto-mode classifiers.
- Most robust Anthropic model to date on an external prompt-injection benchmark; malicious agentic refusal comparable to Mythos 5 / Sonnet 5 / Opus 5.

Long context:

- 1M in / 128K out; no MRCR/RULER row — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Capability = Fable 5.1 weights + unrestricted-safeguard deltas where measured.

- **Tool use: 90/100.** TB 4.0 60.9% (launch-best unrestricted), OSWorld 77.9 partial/41.7 strict, GDPval 1,853 Elo, AutomationBench 31.4 (safeguarded config — Mythos would score higher); capped by Argon's AutomationBench 51.3 and Opus 5.5's TB 66.4 arriving weeks later.
- **Reasoning: 92/100.** HLE-tools 65.0% launch-best, HLE-no-tools 60.9%, TBS 52.6% (2.1x gen jump), plus externally validated scientific firsts (50% protein-design hit rate, Venus map) — the deepest verified research capability of any model this session; docked for Astra's saturated academic rows (GPQA 96/ARC 99.9) having no Mythos counterpart.
- **Context window: 92/100.** 1M in / 128K out verified; no retrieval benchmark published.
- **Multimodal: 70/100.** Text + image in, text out; vision consumed within agentic science workflows; no native audio/video verified.
- **Coding: 92/100.** CursorBench 3.2 73.4% best-in-table, TB 4.0 60.9% launch-best, AA Coding Index 67.2 in a three-way top tie, Millennium crash-root-cause; capped by FrontierCode-Main trailing Astra/Opus 5.5 and DeepSWE 70.0 mid-cluster.
- **Cost efficiency: 30/100.** $10/$50 top-tier pricing (cached $0.25; family est. −25% typical / −45% agentic vs Fable 5 softens it) — capability-per-dollar only makes sense inside vetted cyber/bio programs where the unrestricted config is the point; general work should use Fable 5.1/Opus 5.5 at half the price.
- **Overall Score: 87/100.** (90 + 92 + 92 + 70 + 92) / 5 = 87.2 → 87. Best-fit: the specialist's frontier — verified defensive-cyber and life-sciences research (CVP/LSVP) where relaxed safeguards convert into measured capability (TB 4.0 +5.1 pts, 50% binder hit rate); for everything else it is functionally Fable 5.1.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Anthropic Fable 5.1/Mythos 5.1 launch post primary — shared benchmark table with Mythos-specific TB 4.0 row, research results, safety section; LLM Stats page for pricing/context/date); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.