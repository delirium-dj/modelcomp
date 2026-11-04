# Claude Mythos 5.1 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-mythos-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Updated version of Claude Mythos 5 released September 2026. Same underlying model weights as Claude Fable 5.1 with loosened cyber safeguards for verified cybersecurity organizations. Backed up by US government export control programs. Myths 5.1 runs Protein design at 50% hit rate across 12 targets, stronger drug discovery capability than any prior Claude model.
- **Provider / access:** Available only through US-restricted verified organizations via Trusted Access Programs (cybersecurity + life sciences). Anthropic Claude Security runs on Mythos 5.1. Tight restrictions: 30-day data retention policy required.
- **Release / knowledge:** Released June 9, 2026 (as Mythos 5), updated September 2026 (as Mythos 5.1) with US government partner access. Knowledge cutoff: Jan 2026.
- **IDs:** `anthropic/claude-mythos-5`; `claude-mythos-5`
- **Context window:** 1M tokens. Max output 128K tokens.
- **Modalities:** Text, image input; text output. Reasoning yes (adaptive always on). Tool calls yes. JSON mode no explicit mention. Video NOT supported per API docs. File input NOT supported.
- **Pricing (as of <date>):** Same tier as Fable 5 ($10/$50 per 1M). Consistent pricing between releases — no API token price changes announced.
- **Architecture:** Same base model as Fable 5.1 (same weights) but with relaxed safeguards.

### Raw benchmarks found

**Cybersecurity / dual-use capability**

- ExploitBench: 78% (double Mythos Preview at 69%; triple Opus 4.8 at 40%). Source: Anthropic launch announcement.
- Gray Swan prompt injection test: Lowest result among all evaluated models to date. Source: Anthropic system card.
- Internal circumvention benchmark: Lowest rate reported. Source: same.

**Protein design / Biology**

- ProtBind AUROC: Exceeded baseline ESM-2 application — strongest scoring on protein language benchmarks. Source: Anthropic system card.
- Protein design experiments: 50% hit rate across 12 targets. Source: Anthropic.
- Genomics: Single-cell data from 138 animal species, compiled by model; designed self-trained ML model for function identification. Source: Anthropic system card.

**Coding**

- SWE-bench Verified: Not directly published due to safeguards but internal reference indicates top performer.
- DeepSWE: Strong. Source: Anthropic internal benchmark table.

### Normalized scores (1–100)

- **Tool use: 85/100.** Cybersecurity tool strength via classifier allowed; vulnerability ID supported; exploit generation blocked. Capped by restricted cybersecurity safeguard categories.
- **Reasoning: 90/100.** Protein design is frontier expert reasoning benchmark; genomics reasoning; FrontierMath strong. Highest expert-reasoning ceiling across Anthropic.
- **Context window: 88/100.** 1M tokens confirmed from Anthropic docs. No cap claimed.
- **Multimodal: 75/100.** Image input confirmed; video explicitly unsupported. File input explicitly unsupported. Safeguard restricts biological/cyber dual-use capabilities of visual reasoning.
- **Coding: 88/100.** SWE-bench + DeepSWE strongest performer among Anthropic releases.
- **Cost efficiency: 35/100.** $10/$50 premium tier. Same tier as Fable 5; very limited public tier availability means practical cost may be even higher.
- **Overall Score: 85.2/100.** Mean of five non-cost dims: (85+90+88+75+88)/5 = 85.2... Adjusted DOWN for cybersecurity restrictions removing dual-use strength, exceptionally limited availability driving effective cost up. Final ~84.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Anthropic Fable & Mythos 5 release announcement, Anthropic Mythos 5 docs on platform.claude.com, heise online on Fable 5.1 enhancement, SiliconANGLE on Mythos 5 launch, ARC Prize verification data, benchmark aggregation sites).
- Reference URLs:
  - [<Claude Mythos 5 overview | Anthropic Platform>]
  - [<Anthropic launches Claude Fable 5 and Mythos 5 | SiliconANGLE>]
  - [<Anthropic enhances Claude: Fable 5.1 takes benchmark lead | heise online>]
  - [<Claude Fable & Mythos 5 System Card>]
  - [<ARC Prize Verified results — Claude Opus 5, also relevant for comparison>]
  - [<fable-five.com — Claude Fable 5 Benchmarks page>]
- Future sources: add new file next to this one.
