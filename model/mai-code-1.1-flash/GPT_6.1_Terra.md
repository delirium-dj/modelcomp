# MAI-Code-1.1-Flash — findings by GPT-6.1 Terra

- Source: Microsoft MAI-Code-1.1-Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's coding-oriented mixture-of-experts model for GitHub Copilot, with a local quantized deployment.
- **Provider / access:** GitHub Copilot and Microsoft local deployment; exact public standalone API ID not verified.
- **Release / knowledge:** Microsoft announced local availability 2026-10-07; knowledge cutoff not verified.
- **IDs:** `MAI-Code-1.1-Flash`; local and cloud deployments use different precision.
- **Context window:** 256K on Microsoft's local implementation.
- **Modalities:** Text and image input, text output; agent tools via the Copilot harness.
- **Pricing (as of 2026-11-02):** No per-inference charge for local calls; hardware and Copilot costs may apply; cloud token price not verified.
- **Architecture:** 137B total / 6.8B active MoE; local variant uses mixed approximately 3.3-bit quantization.

### Raw benchmarks found

- Microsoft's Copilot production harness reports cloud BF16 SWE-bench Verified **72.6%** and Terminal-Bench 2.1 **62.9%**.
- Microsoft separately reports local quantized SWE-bench Verified **70.80%** and Terminal-Bench 2.1 **66.29%**; hardware and precision differ from cloud.
- Microsoft reports cloud Screenshot2WebApp internal **42.1%** and Vision2Web Level 3 **11.5%**, both harness-specific.
- No exact-model GPQA or full-window retrieval benchmark verified; MAI-Code-1-Flash is a different model.

### Normalized scores (1–100)

- **Tool use: 76/100.** Vendor terminal test supports agentic coding; independent replication not verified.
- **Reasoning: 65/100.** Provisional without exact-model general reasoning measurements.
- **Context window: 74/100.** 256K local window documented; full-window retrieval unverified.
- **Multimodal: 65/100.** Image and text input with text output; vendor visual coding results are mixed.
- **Coding: 78/100.** Vendor SWE and terminal scores are promising but harness-specific.
- **Cost efficiency: 80/100.** Local calls lack per-inference charges but require substantial hardware; cloud pricing unverified.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Microsoft model card and local deployment evaluation; scores are interpretations, not vendor ratings.
- Reference URLs:
  - [Microsoft model card](https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF)
  - [Microsoft local deployment evaluation](https://commandline.microsoft.com/local-models-sandboxed-tools-github-windows/)
