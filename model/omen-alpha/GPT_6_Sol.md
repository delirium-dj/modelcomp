# Omen Alpha — findings by GPT 6 Sol

- Source: OpenCode Go / TokenRa (`omen-alpha`; anonymous upstream)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha.
- **Short description:** Stealth reasoning and coding model offered under an exact `omen-alpha` route. Its maker and checkpoint lineage have not been confirmed; **do not** equate it with Ox Alpha / GLM-5.3-Flash on circumstantial similarities ([identity investigation](https://omenalpha.io/what-is-omen-alpha.html), [provider inventory](https://modelcompare.dev/models/opencode-go/omen-alpha)).
- **Provider / access:** OpenCode Go selector `omen-alpha`; TokenRa claims an OpenAI-compatible Chat Completions route with the same ID, but TokenRa-to-OpenCode checkpoint identity is not independently audited ([route](https://omenalpha.io/), [independent route inventory](https://modelcompare.dev/models/opencode-go/omen-alpha)). A subscription's included credits are not equivalent to a free public API.
- **Release / knowledge:** First recorded OpenCode appearance **2026-09-04**. No published training cutoff or pinned weight revision; stealth API can silently change ([independent route listing](https://modelcompare.dev/models/opencode-go/omen-alpha), [identity report](https://omenalpha.io/what-is-omen-alpha.html)).
- **IDs:** `omen-alpha` provider selector; `opencode-go/omen-alpha` catalog path describes the same route, not an upstream model maker. Unverified theories about Z.ai/Xiaomi are not model IDs.
- **Context window:** Approximately **500,000** total tokens, with **128,000** max output advertised by route catalog; no independent long-context retention evaluation ([provider listing](https://modelcompare.dev/models/opencode-go/omen-alpha)).
- **Modalities:** Provider lists text/image input, text output, reasoning and tools; no confirmed audio/video. Image support is provider metadata rather than independently validated visual benchmark evidence ([provider listing](https://modelcompare.dev/models/opencode-go/omen-alpha)).
- **Pricing (as of 2026-11-02):** Route listings quote **$0.20 input / $0.66 output / $0.04 cached read per million**; OpenCode Go subscription and TokenRa billing are distinct purchase paths, so verify before use. No downloadable weights or proven unconditional Free tier ([provider inventory](https://modelcompare.dev/models/opencode-go/omen-alpha), [TokenRa route site](https://omenalpha.io/)).
- **Architecture:** Unknown closed/stealth weights and parameter count; historical Ox Alpha identification does not establish this model's architecture ([identity analysis](https://omenalpha.io/what-is-omen-alpha.html)).

### Raw benchmarks found

- **Agent / tool use:** Provider tool support confirmed in catalog, but no exact-checkpoint τ³, MCP-Atlas or Terminal-Bench result found. Do not interpret OpenCode's token-volume ranking as a task-success benchmark ([provider catalog](https://modelcompare.dev/models/opencode-go/omen-alpha), [usage data](https://opencode.ai/data/zhipu/omen-alpha)).
- **Reasoning / knowledge:** No verified exact-model GPQA/HLE/AA Intelligence Index. Opaque and possibly mutable identity limits cross-date comparisons.
- **Coding:** Dated independent OpenCode benchmark snapshot from **2026-09-04** reports **23.14/40** across four implementation projects (CSV PHP 4/5, offline sync PHP 3.5/5, Dart/Flutter bank feed 2.7/5, Go shipping quotes 3/5); expanded code-quality component **9.94/20**. The visible component scales should not be summed into a new score, and the third-party transcription is not a published SWE-bench result ([benchmark record and methodology](https://omenalpha.io/benchmarks.html)). A separate OpenCode usage ranking lists **63.4%** for an unspecified task measure; do not reinterpret that as SWE-bench ([OpenCode data](https://opencode.ai/data)).
- **Long context:** Nominal 500K cataloged, but no measured retrieval or position-decay curve found.

### Normalized scores (1–100)

- **Tool use: 54/100.** Tool route exists, but task-level agent evaluation is absent.
- **Reasoning: 51/100.** Reasoning advertised with no reproducible reasoning benchmark; conservative provisional mark.
- **Context window: 65/100.** Large advertised 500K window with no independent retention data.
- **Multimodal: 38/100.** Claimed image input, no evaluated vision or media output.
- **Coding: 61/100.** Limited four-project OpenCode evaluation suggests useful work, not broad repository-repair proof.
- **Cost efficiency: 76/100.** Low route list price, with subscription/stealth availability and identity uncertainty.
- **Overall Score: 54/100.** Half-up mean (54 + 51 + 65 + 38 + 61) / 5 = 53.8; provisional until exact checkpoint and wider benchmarks are public.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful identity, route/pricing and benchmark-specific searches; only exact-label results used, unknown maker disclosed. Scores are normalized interpretations.
- Reference URLs:
  - [Independent OpenCode Go provider inventory](https://modelcompare.dev/models/opencode-go/omen-alpha)
  - [Dated four-project benchmark record](https://omenalpha.io/benchmarks.html)
  - [Omen Alpha identity evidence and uncertainty](https://omenalpha.io/what-is-omen-alpha.html)
  - [OpenCode usage data](https://opencode.ai/data/zhipu/omen-alpha)
- Future sources: add a new file next to this one using the same headings.
