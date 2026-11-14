# Inkling 2 Small — findings by Iceman

- Source: OpenCode / Inkling 2 Small Free (revealed Fledge Alpha stealth-preview lineage per local metadata)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling 2 Small (Inkling 2 Small Free)
- **Short description:** OpenCode’s Inkling 2 Small Free is a free/preview multimodal text model listing (image input, text output) with large-context positioning; local metadata describes it as a production MoE model revealed as the identity behind the Fledge Alpha stealth preview.
- **Provider / access:** OpenCode Console inference (`inkling-2-small-free`, `opencode/inkling-2-small` lineage per local metadata) listed in OpenCode Console models documentation. Free-tier availability is time-limited and region-restricted per OpenCode docs.
- **Release / knowledge:** Preview/revealed identity context per local metadata and OpenCode lineage; exact public release/knowledge-cutoff details not clearly established in accessible official sources in this pass.
- **IDs:** `inkling-2-small`, `inkling-2-small-free`, `opencode/inkling-2-small`; local metadata lists aliases including `Fledge Alpha`, `fledge-alpha`, `fledge-alpha-free`, `stealth/fledge-alpha`.
- **Context window:** 1,048,576 tokens total; 131,072 max output (local metadata). Independent official extraction of this exact figure from accessible OpenCode docs text was limited in this pass; treated as metadata claim with verification caveat.
- **Modalities:** Text and image input; text output (local metadata).
- **Pricing (as of 2026-11-14):** **Free** on OpenCode Console during free period (OpenCode docs/pricing). Privacy note: provider retains data and may use it for real-world performance monitoring and model training during the free period (OpenCode docs; region restrictions apply).
- **Architecture:** Local metadata claims MoE (594B total / 17B active) revealed from Fledge Alpha stealth preview; architecture/parameter details not independently verified from an official vendor model card in this pass.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed OpenCode Console models/pricing/changelog documentation, GitHub issues/search results, AA/models.dev/OpenRouter/HF search attempts, and local metadata/prior report. OpenCode docs provide attributable provider/access/pricing/privacy evidence for the exact `inkling-2-small-free` listing, but **no vendor-published benchmark table and no independently verifiable standardized public benchmark numerics** (SWE-bench, GPQA, AIME, LiveCodeBench, Terminal-Bench, AA Intelligence Index, MMMU, etc.) were found for this exact model/identity in accessible sources. Local metadata claims (MoE size, 1M context, Fledge Alpha reveal, preview pricing history, community probes) were not independently verified as official benchmark evidence and are **not used as scored benchmark inputs**. Scores below are provisional normalized estimates based on verified provider listing context and cautious interpretation of metadata claims.

Agent / tool use:

- Available as an OpenCode-hosted coding/chat model in Console listings, but no extracted standardized agent/tool benchmark numerics.
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- No extracted standardized reasoning benchmark numerics for this exact identity.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no verified public score found**

Coding:

- No extracted standardized coding benchmark numerics for this exact identity.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 1M context claimed in local metadata; no standalone long-context retrieval benchmark score extracted.

Multimodal:

- Image input / text output claimed in local metadata; no multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) for a free/preview OpenCode-listed model with limited independently verifiable public capability disclosures.

- **Tool use: 52/100.** Listed for coding/chat use in OpenCode, but no independently verified agent/tool benchmark evidence; capability depth remains uncertain.
- **Reasoning: 48/100.** No independently verified reasoning benchmark numerics; assessed conservatively given limited public evidence.
- **Context window: 82/100.** Local metadata claims a 1M-token context (131K max output), which would be very strong if accurate; score is provisional due to limited independent extraction from official docs text in this pass.
- **Multimodal: 62/100.** Local metadata claims image input with text output, but no extracted multimodal benchmark evidence and limited official spec detail.
- **Coding: 50/100.** Available in OpenCode’s model catalog context, but no independently verified coding benchmark numerics for this exact identity.
- **Cost efficiency: 94/100.** Free on OpenCode Console during the free period, offering high cost efficiency for experimentation (with region restrictions and data-retention/training/privacy tradeoffs).
- **Overall Score: 59/100.** Mean of the five non-cost dimensions (Tool 52, Reasoning 48, Context 82, Multimodal 62, Coding 50) rounded to nearest integer; promising large-context/multimodal positioning by metadata but highly provisional due to sparse independently verified capability evidence.

> Caution: Scores are provisional estimates based on verified provider listing/access/privacy context (OpenCode docs) and unverified local metadata claims (architecture size, 1M context, Fledge Alpha reveal lineage, community-probe basis). No independently verified standardized public benchmark numerics for this exact model were used as scored inputs.

### Source comparison / conflicts

- **Provider/access/pricing/privacy:** OpenCode Console models/pricing/privacy pages confirm `Inkling 2 Small Free` as a listed free model with time-limited availability, region restrictions, and data retention/use-for-training terms during free period.
- **Identity/lineage/spec claims:** Local metadata asserts Fledge Alpha reveal, 1M/131K context, image input, and 594B/17B MoE architecture; these were not independently verified from an official vendor model card/benchmark table in accessible sources this pass.
- **Benchmarks:** No vendor-published benchmark table or independently verifiable standardized public benchmark scores found for this exact identity.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`/API fetches) across OpenCode Console models/pricing/changelog docs, GitHub issue/API searches, AA/models.dev/OpenRouter/HF search attempts, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts): OpenCode Console models docs (shell + webfetch), OpenCode pricing page, OpenCode Zen docs page, OpenCode changelog page (shell + webfetch), OpenRouter/models.dev/AA searches for iceman/inkling/fledge, GitHub API issue searches for iceman/inkling/fledge in anomalyco/opencode, OpenRouter model page attempts for stealth/fledge-alpha and opencode/inkling-2-small (404), Hugging Face models searches for fledge-alpha and inkling-2-small, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [OpenCode Console models](https://opencode.ai/docs/console/models/)
  - [OpenCode pricing](https://opencode.ai/pricing)
  - [OpenCode changelog](https://opencode.ai/changelog)
  - Local repository metadata consulted: `model/inkling-2-small/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
